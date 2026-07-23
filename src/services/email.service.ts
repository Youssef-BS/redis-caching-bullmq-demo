export const sendWelcomeEmail = async (email: string, name: string): Promise<void> => {

    console.log(`Connecting to mail server to reach ${email}...`);
    await new Promise((resolve)=>setTimeout(resolve, 2000));
    console.log(`Sending welcome email successfully to ${name} at ${email}`);


}