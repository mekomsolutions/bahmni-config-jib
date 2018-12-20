Bahmni.ConceptSet.FormConditions.rules = {
    'JIB_Past Medical History' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['JIB_Past Medical History'];

        var sections = {
            "show": [],
            "hide": []
        };

        if (fieldValue && fieldValue.indexOf('JIB_Cancer') > -1) {
            sections.show.push("JIB_Past Cancer Details");
        } else {
            sections.hide.push("JIB_Past Cancer Details");
        }

        return sections;
    },
    'JIB_BCG' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_BCG'];
        if (fieldValue) {
            return {
                show: ["JIB_BCG, Date Given"]
            };
        }
        else {
            return {
                hide: ["JIB_BCG, Date Given"]
            };
        }
    },
    'JIB_Hep A' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_Hep A'];
        if (fieldValue) {
            return {
                show: ["JIB_Hep A, Date Given"]
            };
        }
        else {
            return {
                hide: ["JIB_Hep A, Date Given"]
            };
        }
    },
    'JIB_Hep B' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_Hep B'];
        if (fieldValue) {
            return {
                show: ["JIB_Hep B, Date Given"]
            };
        }
        else {
            return {
                hide: ["JIB_Hep B, Date Given"]
            };
        }
    },
    'JIB_Polio' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_Polio'];
        if (fieldValue) {
            return {
                show: ["JIB_Polio, Date Given"]
            };
        }
        else {
            return {
                hide: ["JIB_Polio, Date Given"]
            };
        }
    },
    'JIB_Measles' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_Measles'];
        if (fieldValue) {
            return {
                show: ["JIB_Measles, Date Given"]
            };
        }
        else {
            return {
                hide: ["JIB_Measles, Date Given"]
            };
        }
    },
    'JIB_Mumps' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_Mumps'];
        if (fieldValue) {
            return {
                show: ["JIB_Mumps, Date Given"]
            };
        }
        else {
            return {
                hide: ["JIB_Mumps, Date Given"]
            };
        }
    },
    'JIB_Rubella' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_Rubella'];
        if (fieldValue) {
            return {
                show: ["JIB_Rubella, Date Given"]
            };
        }
        else {
            return {
                hide: ["JIB_Rubella, Date Given"]
            };
        }
    },
    'JIB_Diphtheria' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_Diphtheria'];
        if (fieldValue) {
            return {
                show: ["JIB_Diphtheria, Date Given"]
            };
        }
        else {
            return {
                hide: ["JIB_Diphtheria, Date Given"]
            };
        }
    },
    'JIB_Pertussis' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_Pertussis'];
        if (fieldValue) {
            return {
                show: ["JIB_Pertussis, Date Given"]
            };
        }
        else {
            return {
                hide: ["JIB_Pertussis, Date Given"]
            };
        }
    },
    'JIB_Tetanus' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_Tetanus'];
        if (fieldValue) {
            return {
                show: ["JIB_Tetanus, Date Given"]
            };
        }
        else {
            return {
                hide: ["JIB_Tetanus, Date Given"]
            };
        }
    },
    'JIB_Genitourinary Exam Details' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_Genitourinary Female Symptoms'];
        var patientGender = patient['gender'];
        var sections = {
            "show": [],
            "hide": []
        };
        if (patientGender == 'M') {
            sections.hide.push("JIB_Genitourinary Female Symptoms");
            sections.hide.push("JIB_Genitourinary Female Exam Abnormalities");
        } else if (patientGender == 'F') {
            sections.hide.push("JIB_Genitourinary Male Symptoms");
            sections.hide.push("JIB_Genitourinary Male Exam Abnormalities");
        }
        return sections;
    }
};