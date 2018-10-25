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
    'JIB_HepB at birth' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_HepB at birth'];
        if (fieldValue) {
            return {
                show: ["JIB_HepB at birth, time administrered after birth"]
            };
        }
        else {
            return {
                hide: ["JIB_HepB at birth, time administrered after birth"]
            };
        }
    },
    'JIB_MR***' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_MR***'];
        if (fieldValue) {
            return {
                show: ["JIB_MR***, Date Given"]
            };
        }
        else {
            return {
                hide: ["JIB_MR***, Date Given"]
            };
        }
    },
    'JIB_Polio1' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_Polio1'];
        if (fieldValue) {
            return {
                show: ["JIB_Polio1, Date Given"]
            };
        }
        else {
            return {
                hide: ["JIB_Polio1, Date Given"]
            };
        }
    },
    'JIB_Polio2' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_Polio2'];
        if (fieldValue) {
            return {
                show: ["JIB_Polio2, Date Given"]
            };
        }
        else {
            return {
                hide: ["JIB_Polio2, Date Given"]
            };
        }
    },
    'JIB_Polio3' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_Polio3'];
        if (fieldValue) {
            return {
                show: ["JIB_Polio3, Date Given"]
            };
        }
        else {
            return {
                hide: ["JIB_Polio3, Date Given"]
            };
        }
    },
    'JIB_IPV' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_IPV'];
        if (fieldValue) {
            return {
                show: ["JIB_IPV, Date Given"]
            };
        }
        else {
            return {
                hide: ["JIB_IPV, Date Given"]
            };
        }
    },
    'JIB_DTP-Hep-Hip1' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_DTP-Hep-Hip1'];
        if (fieldValue) {
            return {
                show: ["JIB_DTP-Hep-Hip1, Date Given"]
            };
        }
        else {
            return {
                hide: ["JIB_DTP-Hep-Hip1, Date Given"]
            };
        }
    },'JIB_DTP-Hep-Hip2' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_DTP-Hep-Hip2'];
        if (fieldValue) {
            return {
                show: ["JIB_DTP-Hep-Hip2, Date Given"]
            };
        }
        else {
            return {
                hide: ["JIB_DTP-Hep-Hip2, Date Given"]
            };
        }
    },
    'JIB_DTP-Hep-Hip3' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_DTP-Hep-Hip3'];
        if (fieldValue) {
            return {
                show: ["JIB_DTP-Hep-Hip3, Date Given"]
            };
        }
        else {
            return {
                hide: ["JIB_DTP-Hep-Hip3, Date Given"]
            };
        }
    },
    'JIB_PCV1' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_PCV1'];
        if (fieldValue) {
            return {
                show: ["JIB_PCV1, Date Given"]
            };
        }
        else {
            return {
                hide: ["JIB_PCV1, Date Given"]
            };
        }
    },
    'JIB_PCV2' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_PCV2'];
        if (fieldValue) {
            return {
                show: ["JIB_PCV2, Date Given"]
            };
        }
        else {
            return {
                hide: ["JIB_PCV2, Date Given"]
            };
        }
    },
    'JIB_PCV3' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_PCV3'];
        if (fieldValue) {
            return {
                show: ["JIB_PCV3, Date Given"]
            };
        }
        else {
            return {
                hide: ["JIB_PCV3, Date Given"]
            };
        }
    },
    'JIB_MR1' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_MR1'];
        if (fieldValue) {
            return {
                show: ["JIB_MR1, Date Given"]
            };
        }
        else {
            return {
                hide: ["JIB_MR1, Date Given"]
            };
        }
    },
    'JIB_JE' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_JE'];
        if (fieldValue) {
            return {
                show: ["JIB_JE, Date Given"]
            };
        }
        else {
            return {
                hide: ["JIB_JE, Date Given"]
            };
        }
    },
    'JIB_Tetanus1' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_Tetanus1'];
        if (fieldValue) {
            return {
                show: ["JIB_Tetanus1, Date Given"]
            };
        }
        else {
            return {
                hide: ["JIB_Tetanus1, Date Given"]
            };
        }
    },
    'JIB_Tetanus2' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_Tetanus2'];
        if (fieldValue) {
            return {
                show: ["JIB_Tetanus2, Date Given"]
            };
        }
        else {
            return {
                hide: ["JIB_Tetanus2, Date Given"]
            };
        }
    },
    'JIB_Tetanus3' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_Tetanus3'];
        if (fieldValue) {
            return {
                show: ["JIB_Tetanus3, Date Given"]
            };
        }
        else {
            return {
                hide: ["JIB_Tetanus3, Date Given"]
            };
        }
    },
    'JIB_Tetanus4' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_Tetanus4'];
        if (fieldValue) {
            return {
                show: ["JIB_Tetanus4, Date Given"]
            };
        }
        else {
            return {
                hide: ["JIB_Tetanus4, Date Given"]
            };
        }
    },
    'JIB_Tetanus5' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['JIB_Tetanus5'];
        if (fieldValue) {
            return {
                show: ["JIB_Tetanus5, Date Given"]
            };
        }
        else {
            return {
                hide: ["JIB_Tetanus5, Date Given"]
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