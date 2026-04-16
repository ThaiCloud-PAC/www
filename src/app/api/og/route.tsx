import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title');
    
    // Default image if no title is provided
    if (!title) {
        return new Response('Missing title', { status: 400 });
    }

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0b6bcb',
            padding: '40px',
            fontFamily: '"Plus Jakarta Sans", sans-serif',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.08) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.08) 2%, transparent 0%)',
              backgroundSize: '100px 100px',
            }}
          />
          <div style={{ color: '#8dc0f4', fontSize: '32px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '24px' }}>
            Packiko / ThaiCloud
          </div>
          <div style={{ color: 'white', fontSize: '72px', fontWeight: 800, textAlign: 'center', padding: '0 120px' }}>
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
