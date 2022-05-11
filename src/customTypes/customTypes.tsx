type User = {
    firstName: string,
    lastName: string,
    email: string,
    gender: string,
    birthDate: string,
    zodiacSign: ZodiacSign
}

type ZodiacSign = 'Aquarius' | 
                    'Capricorn' | 
                    'Pisces' | 
                    'Aries' | 
                    'Taurus' | 
                    'Gemini' | 
                    'Cancer' | 
                    'Leo' | 
                    'Virgo' | 
                    'Libra' | 
                    'Scorpio' | 
                    'Sagitarius';

type ZodiacInfo = {
    data?: {
        current_date: string,
        description: string,
        mood: string,
        compatibility: string,
        color: string,
        lucky_number: number,
    }
    error?: Error
}

export type { User, ZodiacSign, ZodiacInfo }