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
                    'Sagitarius'

export type { User, ZodiacSign }