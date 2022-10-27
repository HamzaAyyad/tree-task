interface Employee {
    image: string,
    id: number,
    ar: string,
    en: string
}

interface Directorate {
    image: string,
    id: number,
    ar: string,
    en: string
}

interface Translate {
    lang: string,
    values: {
        taskName: string,
        taskDesc: string
    }
}

export interface DataModel {
    value: {
        ar: string,
    en: string,
    parentId: number,
    duration: number,
    statusConfirmed: number,
    taskId: number,
    productId: number,
    isUserAdmin: boolean,
    isBelowTask: boolean,
    path: string,
    isleaf: boolean,
    userIsAssigned: boolean,
    isTaskOwner: boolean,
    completionRatio: number,
    weight: number,
    delayPercentImg: any,
    delayPercent: number,
    order: number,
    owner: {
        id: number,
        ar: string,
        en: string,
        image: string
    }
    },
    product: {
                ar: string,
                en: string,
                id: number,
                adminName: string,
                calcMethod: number,
                status: {
                    id: number,
                    ar: string,
                    en: string
                }
            },
    progressColor: string,
    endDate: String,
    startDate: string,
    importancyLevel: {
        ar: string,
        en: string,
        id: string
    },
    rejection: {
        ar: string,
        image: string,
        reason: string,
        en: string,
        id: string
    },
    statusDetail: {
        ar: string,
        en: string,
        id: number
    },
    predcessor: {
        ar: string,
        en: string,
        id: number
    },
    employees: Employee[],
    directorates: Directorate[], 
    dependencyType: {
        id: number,
        ar: string,
        en: string
    },
    statusGroup: {
        id: number,
        ar: string,
        en: string
    },
    hasNotes: boolean,
    recurringSetting: {
        month: {
            ar: string,
            en: string,
            id: number
        },
        endDate: string,
        startDate: string,
        RecurringOccurrences: any,
        monthDay: any,
        weekDay: {
            ar: string,
            en: string,
            id: number
        },
        position: {
            ar: string,
            en: string,
            id: number
        },
        type: {
            ar: string,
            en: string,
            id: number
        },
        every: any
    },
    returnTask: number,
    translatable: Translate[] 
    children: DataModel[]
}



// "value": {
//     },
//     "product": {
//         
//     },
//     "progressColor": "#bf0f0f",
//     "endDate": "21/03/2022",
//     "startDate": "25/07/2021",
//     "importancyLevel": {
//         "ar": "عادي",
//         "en": "Normal",
//         "id": "Normal"
//     },
//     "rejection": {
//         "ar": null,
//         "image": "https://realsoftapps.com/Adaa_New/adaaapi/images/Default.png",
//         "reason": null,
//         "en": null,
//         "id": null
//     },
//     "statusDetail": {
//         "ar": null,
//         "en": null,
//         "id": null
//     },
//     "predcessor": {
//         "ar": null,
//         "en": null,
//         "id": null
//     },
//     "employees": [
//         {
//             "image": "https://realsoftapps.com/Adaa_New/adaaapi/images/106688-1665657370085.png",
//             "id": 106688,
//             "ar": "ايمن محمود طوباسي",
//             "en": "Ayman Mahmoud Toubasi"
//         },
//         {
//             "image": "https://realsoftapps.com/Adaa_New/adaaapi/images/107074-1657696295074.png",
//             "id": 107074,
//             "ar": "wesam obeidat",
//             "en": "wesam obeidat"
//         },
//         {
//             "image": "https://realsoftapps.com/Adaa_New/adaaapi/images/107003-1635166869679.png",
//             "id": 107003,
//             "ar": "محمود مطاوع",
//             "en": "Mahmomoud Mutawe"
//         },
//         {
//             "image": "https://realsoftapps.com/Adaa_New/adaaapi/images/106970-1628522089194.jpg",
//             "id": 106970,
//             "ar": "احمد . موافي",
//             "en": "Ahmad Muwafi"
//         },
//         {
//             "image": "https://realsoftapps.com/Adaa_New/adaaapi/images/107020-1644821537457.png",
//             "id": 107020,
//             "ar": "عمران علان",
//             "en": "Emran Allan"
//         },
//         {
//             "image": "https://realsoftapps.com/Adaa_New/adaaapi/images/106996-1632039366717.png",
//             "id": 106996,
//             "ar": "Deya albawati",
//             "en": "Deya albawati"
//         },
//         {
//             "image": "https://realsoftapps.com/Adaa_New/adaaapi/images/106981-1628406929181.png",
//             "id": 106981,
//             "ar": "ماهر المصري",
//             "en": "Maher Almasri"
//         }
//     ],
//     "directorates": [
//         {
//             "image": "https://realsoftapps.com/Adaa_New/adaaapi/images/2022-03-22_11-39-00.png",
//             "id": 161,
//             "ar": "وحدة الفرق الفنية",
//             "en": "Technical Team Unit "
//         },
//         {
//             "image": "https://realsoftapps.com/Adaa_New/adaaapi/images/2022-03-22_11-36-15.png",
//             "id": 165,
//             "ar": "Mobile Development Team ",
//             "en": "Mobile Development Team "
//         },
//         {
//             "image": "https://realsoftapps.com/Adaa_New/adaaapi/images/Clients-1650537392265.png",
//             "id": 335,
//             "ar": "Clients",
//             "en": "Clients"
//         },
//         {
//             "image": "https://realsoftapps.com/Adaa_New/adaaapi/images/Consultants -1628660989036.png",
//             "id": 327,
//             "ar": "Consultants ",
//             "en": "Consultants "
//         }
//     ],
//     "dependencyType": {
//         "id": null,
//         "ar": null,
//         "en": null
//     },
//     "statusGroup": {
//         "id": null,
//         "ar": null,
//         "en": null
//     },
//     "hasNotes": true,
//     "recurringSetting": {
//         "month": {
//             "ar": null,
//             "en": null,
//             "id": null
//         },
//         "endDate": null,
//         "startDate": null,
//         "RecurringOccurrences": null,
//         "monthDay": null,
//         "weekDay": {
//             "ar": null,
//             "en": null,
//             "id": null
//         },
//         "position": {
//             "ar": null,
//             "en": null,
//             "id": null
//         },
//         "type": {
//             "ar": null,
//             "en": null,
//             "id": null
//         },
//         "every": null
//     },
//     "returnTask": 0,
//     "translatable": [
//         {
//             "lang": "ar",
//             "values": {
//                 "taskName": "MOI Phase 5 Project",
//                 "taskDesc": "b"
//             }
//         },
//         {
//             "lang": "en",
//             "values": {
//                 "taskName": "MOI Phase 5 Project",
//                 "taskDesc": "b"
//             }
//         }
//     ]
// },
// "children":