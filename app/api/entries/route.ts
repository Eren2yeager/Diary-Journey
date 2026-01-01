import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import dbConnect from '@/lib/db';
import Entry from '@/models/Entry';

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();

    // @ts-ignore
    const userId = session.user.id;

    const { searchParams } = new URL(req.url);
    const search = searchParams.get('search');

    let query: any = { userId };

    if (search) {
      const searchLower = search.toLowerCase().trim();
      
      // Build search conditions
      const searchConditions: any[] = [
        { content: { $regex: search, $options: 'i' } },
        { mood: { $regex: search, $options: 'i' } },
      ];

      // Day names (full and abbreviated)
      const dayNames = [
        'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday',
        'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'
      ];
      
      // Month names (full and abbreviated)
      const monthNames = [
        'january', 'february', 'march', 'april', 'may', 'june',
        'july', 'august', 'september', 'october', 'november', 'december',
        'jan', 'feb', 'mar', 'apr', 'may', 'jun',
        'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
      ];

      // Check if search matches a day name
      if (dayNames.includes(searchLower)) {
        // Get all entries and filter by day name in memory
        // This is necessary because MongoDB doesn't have a direct way to search by formatted date string
        const allEntries = await Entry.find({ userId }).sort({ createdAt: -1 });
        const filteredEntries = allEntries.filter(entry => {
          const entryDate = new Date(entry.createdAt);
          const dayName = entryDate.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
          const dayShort = entryDate.toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase();
          return dayName.includes(searchLower) || dayShort.includes(searchLower);
        });
        return NextResponse.json({ success: true, data: filteredEntries });
      }

      // Check if search matches a month name
      if (monthNames.includes(searchLower)) {
        const allEntries = await Entry.find({ userId }).sort({ createdAt: -1 });
        const filteredEntries = allEntries.filter(entry => {
          const entryDate = new Date(entry.createdAt);
          const monthName = entryDate.toLocaleDateString('en-US', { month: 'long' }).toLowerCase();
          const monthShort = entryDate.toLocaleDateString('en-US', { month: 'short' }).toLowerCase();
          return monthName.includes(searchLower) || monthShort.includes(searchLower);
        });
        return NextResponse.json({ success: true, data: filteredEntries });
      }

      // Check if search is a year (4 digits)
      if (/^\d{4}$/.test(search)) {
        const year = parseInt(search);
        const startDate = new Date(year, 0, 1);
        const endDate = new Date(year + 1, 0, 1);
        searchConditions.push({
          createdAt: {
            $gte: startDate,
            $lt: endDate
          }
        });
      }

      // Check if search contains date patterns (e.g., "2024-01", "01/15", "Jan 15")
      const datePatterns = [
        /^\d{4}-\d{2}$/, // YYYY-MM
        /^\d{2}\/\d{2}$/, // MM/DD
        /^\d{1,2}\/\d{1,2}\/\d{4}$/, // MM/DD/YYYY or M/D/YYYY
        /^[a-z]{3}\s+\d{1,2}$/i, // Mon DD or Month DD
      ];

      let dateMatch = false;
      for (const pattern of datePatterns) {
        if (pattern.test(search)) {
          dateMatch = true;
          break;
        }
      }

      if (dateMatch) {
        // For date patterns, we'll search in the formatted date string
        const allEntries = await Entry.find({ userId }).sort({ createdAt: -1 });
        const filteredEntries = allEntries.filter(entry => {
          const entryDate = new Date(entry.createdAt);
          const formats = [
            entryDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }), // MM/DD/YYYY
            entryDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), // Month DD, YYYY
            entryDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }), // Mon DD, YYYY
            `${entryDate.getFullYear()}-${String(entryDate.getMonth() + 1).padStart(2, '0')}`, // YYYY-MM
          ];
          return formats.some(format => format.toLowerCase().includes(searchLower));
        });
        return NextResponse.json({ success: true, data: filteredEntries });
      }

      query.$or = searchConditions;
    }

    const entries = await Entry.find(query).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: entries });
  } catch (error) {
    console.error('Error fetching entries:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch entries' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();

    const body = await req.json();
    const { content, mood, attachments } = body;

    if (!content || !mood) {
      return NextResponse.json({ error: 'Content and mood are required' }, { status: 400 });
    }

    // @ts-ignore
    const userId = session.user.id;

    const entry = await Entry.create({
      userId,
      content,
      mood,
      attachments,
    });

    return NextResponse.json({ success: true, data: entry }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to create entry' }, { status: 500 });
  }
}
