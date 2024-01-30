//years is the number of years
import courses from '../data/courses.json'

export const getTermsBasedOnStart = (start,summer)=>{
    if(summer){
        switch (start) {
            case "spring": return ["spring","summer","fall"]
            case "summer": return ["summer","fall","spring"]
            case "fall": return ["fall","spring","summer"]
        }
    }
    else {
        switch (start) {
            case "spring": return ["spring","fall"]
            case "summer": return ["fall","spring"]
            case "fall": return ["fall","spring"]
        }
    }
}
function calculateSemesters(year, semester, semestersPerYear) {
    return (year - 1) * semestersPerYear + semester;
}
export const makePlan = (summer,startingSem,prefillData,lockedupto) => {

    const isSummerEnabled = summer;

    let targetCreditPerSem = 6;

    let mapData = []

    // for (let i = 0; i < years; i++) {
    //     mapData.push({
    //         // "summer": [],
    //         "spring": [],
    //         "fall": [],
    //     })
    // }
    let terms = []
    let years = 0
    if(isSummerEnabled){
        years = 3
        targetCreditPerSem = 3
        terms = getTermsBasedOnStart(startingSem,isSummerEnabled)
    }else {
        years = 4
        terms = getTermsBasedOnStart(startingSem,isSummerEnabled)
    }


    // console.log(courses,"COURSE GENERATOR")
    // console.log(,"COURSE GENERATOR")
    const requiredCourses = getPlannedCourses(courses)

    // find required courses in prefill data

    let completedCourses = []
    // console.log(isPrereqDone({
    //     "discipline": "Cmp Sci",
    //     "number": "1000",
    //     "name": "COMPUTER SCIENCE EXPERIENCES",
    //     "mandatory": true,
    //     "pre": {},
    //     "summer": true,
    //     "fall": true,
    //     "spring": true,
    //     "credit": 3
    // },[]),"IS PRE REQ DONE OR NOT")
    for (let i = 0; i < years; i++) {
        const mapObj = {}
        for (let j = 0; j < terms.length; j++) {
            let currentCredit = 0
            let assignedCourse = []
            const currentSem = calculateSemesters(i+1,j+1,isSummerEnabled?3:2)
            if(currentSem <= lockedupto){
                prefillData[i][terms[j]].forEach(cor=>{
                    assignedCourse.push(cor)
                    completedCourses.push(cor)
                    currentCredit+=cor.credit
                })
                mapObj[terms[j]] = assignedCourse
                continue;
            }

            let assignedMajorsSoFar = 0
            let assignedNonMajorSoFar = 0

            let eligibleCourses = getCoursesWithCompletedPrereq(requiredCourses,completedCourses,terms[j])
            let targetCreditMajorPerSem = 6
            targetCreditPerSem = 5

            if(terms[j]==="fall" && years-1 === i){
                targetCreditPerSem = 12
                // targetCreditMajorPerSem = 7

            }
            if(terms[j]==="spring" && years-1 === i){
                targetCreditPerSem = 12
                // targetCreditMajorPerSem = 7
            }
            // else {
            //     // if(isSummerEnabled)
            //     // targetCreditPerSem = 12
            //     // else
            //         targetCreditPerSem = 13
            //     targetCreditMajorPerSem = 12
            //
            // }



            eligibleCourses = eligibleCourses.sort((a,b)=>{
                return parseInt(a.number) - parseInt(b.number)
            })
            eligibleCourses = eligibleCourses.filter((a)=>{
                return !completedCourses.find(b=>b.discipline === a.discipline && b.number === a.number)
            })


            // eligibleCourses = eligibleCourses.sort((a,b)=>{
            //     return a.mandatory - b.mandatory
            // })
            console.log(eligibleCourses,"THI IS SORTED LIST")
            // console.log(completedCourses,"THI IS SORTED LIST")

            const majorRemaining = (courses) => {
                let nonMajor = courses.find(i=>i.mandatory)
                return !!nonMajor;
            }


            while(eligibleCourses.length > 0 && (assignedNonMajorSoFar <= targetCreditPerSem || assignedMajorsSoFar <= targetCreditMajorPerSem)){
                if(majorRemaining(eligibleCourses) && targetCreditMajorPerSem >= assignedMajorsSoFar){
                    const closestMajor = eligibleCourses.findIndex(i=>i.mandatory)
                    assignedCourse.push(eligibleCourses[closestMajor])
                    completedCourses.push(eligibleCourses[closestMajor])
                    currentCredit+=eligibleCourses[closestMajor].credit
                    assignedMajorsSoFar+=eligibleCourses[closestMajor].credit

                    eligibleCourses.splice(closestMajor,1)
                }else {
                    const closestNonMajor = eligibleCourses.findIndex(i=>!i.mandatory)

                    if(closestNonMajor=== -1){
                        console.log(eligibleCourses,"ERROR STATE ELIB",eligibleCourses[0])
                        assignedCourse.push(eligibleCourses[0])
                        completedCourses.push(eligibleCourses[0])
                        currentCredit+=eligibleCourses[0].credit
                        assignedNonMajorSoFar+=eligibleCourses[0].credit
                        // targetCreditPerSem = -1
                        assignedMajorsSoFar = 999

                        eligibleCourses.splice(0,1)
                        continue
                    }

                    assignedCourse.push(eligibleCourses[closestNonMajor])
                    completedCourses.push(eligibleCourses[closestNonMajor])
                    // console.log(closestNonMajor)
                    currentCredit+=eligibleCourses[closestNonMajor].credit
                    assignedNonMajorSoFar+=eligibleCourses[closestNonMajor].credit
                    assignedMajorsSoFar = 999
                    eligibleCourses.splice(closestNonMajor,1)
                }
            }


            // eligibleCourses.forEach((course,countIdx)=>{
            //     if(currentCredit<targetCreditPerSem && !isCourseDone(course,completedCourses)){
            //         if(areOnlyMajorRemaining(eligibleCourses.slice(countIdx,eligibleCourses.length-1))){
            //             assignedCourse.push(course)
            //             completedCourses.push(course)
            //             currentCredit+=course.credit
            //             if(course.mandatory){
            //                 assignedMajorsSoFar++
            //             }
            //         }else {
            //             if(assignedMajorsSoFar<=targetMajorPerSem) {
            //                 assignedCourse.push(course)
            //                 completedCourses.push(course)
            //                 currentCredit+=course.credit
            //                 if(course.mandatory){
            //                     assignedMajorsSoFar++
            //                 }
            //             }
            //             else {
            //                 //pass
            //             }
            //         }
            //
            //
            //     }
            // })
            mapObj[terms[j]] = assignedCourse
        }
        console.log("YEAR = "+i,mapObj,"MAP OBJ F1")
        mapData.push(mapObj)
    }
    return mapData
}

// function findLinkedCourses(course) {
//     if(course){
//
//     }
// }

export function getRequiredCourses(courses) {
    return courses.filter(i=>i.mandatory)
}

export function getPlannedCourses(courses) {
    return courses.filter(i=>i.planned)
}

function getCourse(dis,code) {
    return courses.filter(i=>(i.discipline===dis && i.number===code))[0]
}

function getCoursesWithCompletedPrereq(courses,completedCourses,term) {
    const completed = []
    courses.forEach(i=>{
        if(isPrereqDone(i,completedCourses)){
            completed.push(i)
        }
    })
    // console.log(term,"COMPLETED BEFORE FILTER",completed,completed.filter(i=>i[term]===true))
    return completed.filter(i=>i[term]===true)
}


function isCourseDone(course,completedCourses){
    if(!course)
        return true

    return completedCourses.filter(i=>(i.discipline===course.discipline && i.number === course.number)).length >= 1
}

export const serializePrereq = (obj)=>{
    if (!obj) {
        return "";
    }
    if(Object.keys(obj).length<=0)
        return "None"
    if (obj.operator) {
        var operator = obj.operator.toUpperCase();
        var nest = obj.nest.map(function(elem) {
            return serializePrereq(elem);
        }).join(" " + operator + " ");
        return "(" + nest + ")";
    } else {
        var discipline = obj.discipline;
        var number = obj.number;
        var concurrent = obj.concurrent ? " (concurrent)" : "";
        return discipline + " " + number + concurrent;
    }
}



export function isPrereqDone(course,completedCourses) {
    // console.log("IS PRE REQ CALLED",course,completedCourses)
    if(!course)
        return true
    if(course.hasOwnProperty("pre") && Object.keys(course.pre).length===0) {
        // console.log("FOUND EMPTY PRE, RETURN TRUE")
        return true;
    }




    if(course.hasOwnProperty("pre") && course.pre.hasOwnProperty("operator") && course.pre.operator === "AND"){
        // console.log("FOUND PRE WITH AND")

        let condition = true;
        for (let i = 0; i < course.pre.nest.length; i++) {
            condition = ((isPrereqDone(getCourse(course.pre.nest[i].discipline,course.pre.nest[i].number),completedCourses)
                && isCourseDone(getCourse(course.pre.nest[i].discipline,course.pre.nest[i].number),completedCourses)) && condition)
                // || course.pre.nest[i]['concurrent'])
        }
        return condition;
    }
    if(course.hasOwnProperty("pre") && course.pre.hasOwnProperty("operator") && course.pre.operator === "OR"){
        // console.log("FOUND PRE WITH OR")

        let condition = true;
        for (let i = 0; i < course.pre.nest.length; i++) {
            condition = ((isPrereqDone(getCourse(course.pre.nest[i].discipline,course.pre.nest[i].number),completedCourses) &&
                isCourseDone(getCourse(course.pre.nest[i].discipline,course.pre.nest[i].number),completedCourses))
                // || course.pre.nest[i]['concurrent']
            )|| condition
        }
        return condition;
    }




    if(course.hasOwnProperty("discipline") && course.hasOwnProperty("concurrent")){
        // console.log("FOUND DIS, RETURN IS PREREQ")
        return isPrereqDone(getCourse(course.discipline,course.number),completedCourses)
    }



    if(course.hasOwnProperty("name")){
        // console.log("FOUND NAME, RETURN IS COURSE DONE")

        return isCourseDone(course,completedCourses)
    }

    // console.log("FOUND NOTHING, RETURN TRUE")
    return true
}
