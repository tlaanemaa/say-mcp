import say from "say";

/**
 * Speak the given text using the system's default voice and speed.
 * @param text The text to speak.
 * @param speed The speed at which to speak the text. Must be between 0.1 and 3.0.
 * @returns A promise that resolves when the text is spoken.
 */
export function speak(text: string, speed: number = 1.0): Promise<void> {
    const boundedSpeed = Math.max(0.1, Math.min(3.0, speed));
    return new Promise((resolve, reject) => {
        say.speak(text, undefined, boundedSpeed, (err) => {
            return err ? reject(err) : resolve();
        });
    });
}
