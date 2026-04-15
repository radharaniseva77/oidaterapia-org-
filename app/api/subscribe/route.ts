import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 });
    }

    // MOCKUP API: 
    // Integración futura preparada para Resend o Supabase o Vercel KV.
    // ej. await sql`INSERT INTO leads (email) VALUES (${email})`;
    console.log(`[LEAD CAPTURADO] Correo recibido: ${email}`);

    return NextResponse.json({ message: 'Suscripción exitosa. Pronto enviaremos tus resultados.' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error del servidor procesando correo' }, { status: 500 });
  }
}
