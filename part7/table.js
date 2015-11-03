function Multiply() {

                /* convert all fields to ints */

                var p1 = parseInt(document.getElementById("n1").value);
                var p2 = parseInt(document.getElementById("n2").value);
                var p3 = parseInt(document.getElementById("n3").value);
                var p4 = parseInt(document.getElementById("n4").value);

                document.getElementById("multtable").innerHTML =
                        "<table><tr><th>&nbsp;</th>" +
                        "<th>" + p1 +
                        "</th><th>" + p2 +
                        "</th><th>" + p3 +
                        "</th><th>" + p4 +
                        "</th></tr>" +
                        "<tr><th scope='row'>" + p1 +
                        "</th><td>" + (p1 * p1) +
                        "</th><td>" + (p1 * p2) +
                        "</th><td>" + (p1 * p3) +
                        "</th><td>" + (p1 * p4) +
                        "</td></tr>" +
                        "<tr><th scope='row'>" + p2 +
                        "</th><td>" + (p2 * p1) +
                        "</th><td>" + (p2 * p2) +
                        "</th><td>" + (p2 * p3) +
                        "</th><td>" + (p2 * p4) +
                        "</td></tr>" +
                        "<tr><th scope='row'>" + p3 +
                        "</th><td>" + (p3 * p1) +
                        "</th><td>" + (p3 * p2) +
                        "</th><td>" + (p3 * p3) +
                        "</th><td>" + (p3 * p4) +
                        "</td></tr>" +
                        "<tr><th scope='row'>" + p4 +
                        "</th><td>" + (p4 * p1) +
                        "</th><td>" + (p4 * p2) +
                        "</th><td>" + (p4 * p3) +
                        "</th><td>" + (p4 * p4) +
                        "</td></tr>" +
                        "</table>";
            }

            // initializer function from https://teaching.cs.uml.edu/~heines/91.461/91.461-2012-13f/461-lecs/code/jmh-table-v5.html --!>

            var tblInitializer = {
                // helper function for parameter initialization
                // note that to transfer the local value to the Utils member variable, we must use
                //    associative array syntax with square brackets because the name of the variable
                //    to be initialized is expressed as a string
                // updated by JMH on November 3, 2012 at 1:05 PM
                "initializeHelper": function (strVarToInitialize) {
                    var str = strVarToInitialize;
                    if (str !== null) {
                        var n = parseInt(str, 10);
                        if (!isNaN(n)) {
                            //  n1 = n;
                        }
                    }
                },
                // get passed parameters
                "initialize": function () {
                    tblInitializer.initializeHelper("n1");
                    tblInitializer.initializeHelper("n2");
                    tblInitializer.initializeHelper("n3");
                    tblInitializer.initializeHelper("n4");
                }
            };