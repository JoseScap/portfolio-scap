export type Dictionary = {
    aboutSection: {
        aboutMe: string,
        alias: string
        description: string
        fullnameLabel: string
        fullname: string
        ageLabel: string
        age: string
        fromLabel: string
        from: string
        emailLabel: string
        email: string
        seeMyResume: string
        contactMe: string
    }
}

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
