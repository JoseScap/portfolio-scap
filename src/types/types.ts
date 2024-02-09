
export type Skill = {
    fav: boolean
    title: string
    years: number
}

export type Profile = {
    fullname:    string;
    alias:       string;
    description: string;
    age:         number;
    email:       string;
    from:        string;
}


export type Journey
 = {
    startYear:   string;
    name:        string;
    fav:         boolean;
    JourneyItem: JourneyItem[];
}

export type JourneyItem = {
    title:     string;
    place:     string;
    startDate: string;
    endDate:   string | null;
}
