var mysql = require("mysql");
const express = require('express')
const app = express();
var bodyParser = require('body-parser')
var jwt = require('jsonwebtoken');
var fs = require('fs')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
const con = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: '',
    database: 'User'
});
con.connect((err) => {
    if (err) throw err;
    console.log("running")
})
app.post('/insert', function (req, res) {
    // console.log(req.body)
    con.query("SELECT * FROM UserData where Email='" + req.body.email + "'", function (err, data) {
        if (data[0]) {
            res.send("Duplicate Email")
        }
        else {
            con.query("INSERT INTO UserData(Name,Email,Password,Phone,DOB,Role) VALUES('" + req.body.name + "','" + req.body.email + "','" + req.body.password + "','" + req.body.phone + "','" + req.body.dob + "','" + req.body.role + "')", function (err, result) {

                return res.status(200).send("inserted");

            })
        }
    })
});

app.post('/verify', function (req, res) {

    con.query(`SELECT * FROM user where Email="${req.body.email}" and Password="${req.body.password}"`, function (err, result) {
       console.log(result[0])
        if (result[0]) {
            var token = jwt.sign({ e: result }, "key");
            console.log("valid")
            // console.log("resultlogin",result[0],token)
            res.json({ result: result[0], token: token });
        }
        else {
           res.send({ result: result[0]});
            // res.send("not valid");
        }

    })
});

app.post('/InsertDrive', function (req, res) {
    var obj = req.body.degree;
    console.log(req.body)
    var result = Object.keys(obj).map(function (key) {
        if (obj[key])
            return key;

    });

    console.log(result)
    con.query("UPDATE  user SET Notifications = Notifications+1 ")
    con.query("INSERT INTO NotificationTable(Company,DOD,degree) VALUES('" + req.body.Company + "','" + req.body.DOD + "','" + result + "')")

    con.query("INSERT INTO DriveList(Company,location,criteria,DOD,Description,degree) VALUES('" + req.body.Company + "','" + req.body.location + "','" + req.body.Criteria + "','" + req.body.DOD + "','" + req.body.Description + "','" + result + "')")

});

app.post("/InsertUser", (req, res) => {


    const data = req.body;
    console.log(data)
    con.query(
        "INSERT INTO `user`(`Name`, `FatherName`, `MothersName`, `MobileNumber`, `Branch`, `DOB`, `Year`, `Gender`, `RollNo`, `Age`, `Email`, `Address`, `SSC`, `HSC`, `BTECHAGGREGATE`, `Backlogs`, `SSCSCHOOLNAME`, `HSCSCHOOLNAME`, `Password`,`image`) VALUES" +
        "('" +
        data.Name +
        "','" +
        data.FatherName +
        "','" +
        data.MotherName +
        "','" +
        data.MobileNumber +
        "','" +
        data.Branch +
        "','" +
        data.DOB +
        "','" +
        data.Year +
        "','" +
        data.Gender +
        "','" +
        data.RollNo +
        "','" +
        data.Age +
        "','" +
        data.Email +
        "','" +
        data.Address +
        "','" +
        data.SSC +
        "','" +
        data.HSC +
        "','" +
        data.Btech +
        "','" +
        data.Backlogs +
        "','" +
        data.SchoolSSC +
        "','" +
        data.SchoolHHC +
        "','" +
        data.Password +
        "','" + data.image + "')",
        function (err, result, fields) {
            if (err) throw err;
            // console.log(result);
            res.status(200).send({ result: result });
        }
    );

})

app.post('/UserData', function (req, res) {

    con.query(`SELECT * FROM DriveList `, function (err, result) {
        console.log(result)
        if (err) throw err;
        res.send(result)


    })
});

app.post('/DriveData', function (req, res) {

    con.query(`SELECT * FROM DriveList ORDER BY DOD ASC `, function (err, result) {
        console.log(result)
        if (err) throw err;
        res.send(result)


    })
});
app.post('/NullNotification', function (req, res) {
    console.log("in notification", req.body)
    obj = req.body
    var name = Object.keys(obj).map(function (key) {
        return key;

    });
    console.log(name)

    con.query("UPDATE  user SET Notifications = 0  WHERE Name='" + name + "'")
    con.query("SELECT * from user WHERE Name='" + name + "'", function (err, result) {
        console.log(result[0].Notifications)
        var r = result[0].Notifications
        res.json({ result: result[0].Notifications });

        // res.send(r)
    })


})
app.post('/NotificationValue', function (req, res) {
    console.log("in notification", req.body)
    name = req.body.name


    con.query("SELECT Notifications from user WHERE Name='" + name + "'", function (err, result) {
        console.log(result)
        //    var r = result[0].Notifications
        //      res.json({ result: result[0].Notifications });

        res.send(result)
    })


})
app.post('/NotificationTableData', function (req, res) {

    console.log("in notificationtableData", req.body)
    obj = req.body
    var name = Object.keys(obj).map(function (key) {
        return key;

    });
    con.query("UPDATE  user SET Notifications = 0  WHERE Name='" + name + "'", function (err, r) {
    })

    con.query(`SELECT * FROM NotificationTable ORDER BY DOD ASC  `, function (err, result) {
        if (err) throw err;
        res.send(result)


    })
});
app.post("/UpdateUser", (req, res) => {


    const data = req.body.data;
    const n = req.body.name
    console.log("name received", n)

    console.log("body received", data)
    con.query("UPDATE user SET  `Name`='" + data.Name + "',FatherName='" + data.FatherName + "', `MothersName`='" + data.MotherName + "', `MobileNumber`='" + data.MobileNumber + "', `Branch`='" + data.Branch + "', `DOB`='" + data.DOB + "', `Year`='" + data.Year + "', `Gender`='" + data.Gender + "', `RollNo`='" + data.RollNo + "', `Age`='" + data.Age + "', `Email`='" + data.Email + "', `Address`='" + data.Address + "', `SSC`='" + data.SSC + "', `HSC`='" + data.HSC + "', `BTECHAGGREGATE`='" + data.Btech + "', `Backlogs`='" + data.Backlogs + "', `SSCSCHOOLNAME`='" + data.SchoolSSC + "', `HSCSCHOOLNAME`='" + data.SchoolHHC + "', `Password`='" + data.Password + "', `image`='" + data.image + "' WHERE Name='" + req.body.name + "'")
})
app.post("/PlacementGraphdata", (req, res) => {

    con.query("SELECT * from PlacementData", function (req, result) {
        res.send(result)
        console.log(result)
    })

})

app.post('/StudentDetail', function (req, res) {
    console.log("api called");

    try {
        console.log("body", req.body)
        con.query(
            "SELECT `Name`,`Branch`,`RollNo`,`Email`,`SSC`,`HSC`,`BTECHAGGREGATE`,`Backlogs`,`Placed` FROM user WHERE Branch LIKE '" + req.body.Branch + "%'AND SSC >=" + req.body.SSC + " AND HSC >=" + req.body.HSC + " AND BTECHAGGREGATE >=" + req.body.Btech + " AND Year LIKE '%" + req.body.Year + "' AND Backlogs >=" + req.body.Backlogs + " AND Gender LIKE '" + req.body.Gender + "%'  AND Approve =1",
            function (err, result) {
                console.log("result", result)
                if (err) throw err;
                console.log(" data inserted sucefully");
                console.log(result)
                res.status(200).send(result);
            })
    }
    catch (e) {
        return res.status(500).send('ERROR OCCURED AT API');
    }

}
)

app.post('/ViewStudentDetail', function (req, res) {
    console.log(req.body)
    var list = req.body.selectedList
    var Company = req.body.CName
    var Placed = req.body.Placed
    var year = req.body.year

    list.map((roll) => {
        console.log(roll)
        con.query(`UPDATE user SET  Placed=1,PlacedIN='${Company}',PlacedON='${Placed}',PLACEDYEAR='${year}' WHERE RollNo= '${roll}'`)


    })

})
app.post('/ApproveStudentList', function (req, res) {
    console.log("api called");

    try {
        console.log("body", req.body)
        con.query(
            "SELECT `Name`,`Branch`,`RollNo`,`Email`,`SSC`,`HSC`,`BTECHAGGREGATE`,`Backlogs`,`Placed` FROM user WHERE  Approve =0",
            function (err, result) {
                console.log("result", result)
                if (err) throw err;
                console.log(" data inserted sucefully");
                console.log(result)
                res.status(200).send(result);
            })
    }
    catch (e) {
        return res.status(500).send('ERROR OCCURED AT API');
    }

}
)
app.post('/ApproveStudent', function (req, res) {
    console.log(req.body)
    var list = req.body
    console.log("list", list)


    list.map((roll) => {
        console.log(roll)
        con.query(`UPDATE user SET  Approve=1 WHERE RollNo= '${roll}'`)


    })

})
app.post('/PlacedStudentList', function (req, res) {
    console.log("api called");

    try {
        console.log("body", req.body)
        con.query(
            "SELECT `Name`,`Branch`,`RollNo`,`Email`,`SSC`,`HSC`,`BTECHAGGREGATE`,`Backlogs`,`Placed` FROM user WHERE  Placed>0",
            function (err, result) {
                console.log("result", result)
                if (err) throw err;
                console.log(" data inserted sucefully");
                console.log(result)
                res.status(200).send(result);
            })
    }
    catch (e) {
        return res.status(500).send('ERROR OCCURED AT API');
    }

}
)
app.post('/RemovePlacedStudent', function (req, res) {
    console.log(req.body)
    var list = req.body
    console.log("list", list)
    list.map((roll) => {
        console.log(roll)
        con.query(`UPDATE user SET  Placed=0 WHERE RollNo= '${roll}'`)


    })

})
app.post('/RemoveDrive', function (req, res) {
    console.log(req.body)
    var list = req.body
    console.log("list", list)


    list.map((name) => {
        console.log(name)
        con.query(`DELETE FROM DriveList  WHERE Company= '${name}'`)


    })

})
app.post("/CompanyDetail", (req, res) => {
    console.log("show COMPANY DETAILS");
    console.log(req.body)

    con.query("SELECT COUNT(Name) as Total ,PlacedIN,PLACEDYEAR FROM user  WHERE PLACEDYEAR=" + req.body.Year + " AND Placed>0  GROUP BY PlacedIN "
        , function (err, result, fields) {
            if (err) throw err;
            console.log(result)
            res.status(200).send(result);
        });
    // res.send();
})

app.post("/PlacementDetails", (req, res) => {
    console.log("PLACED api called")
    var MBranch
    console.log(req.body.RollNo)
    var roll = req.body.RollNo
    var year = req.body.year
    console.log("year", year)
    con.query("SELECT * FROM PlacementData WHERE Year='" + req.body.year + "' "
        , function (err, result, fields) {
            //  console.log("result",result[0])
            if (result[0]) {
                console.log("inside if")
            }
            else {
                console.log(" inside else")
                con.query("INSERT INTO PlacementData(Year) VALUES('" + req.body.year + "')"
                    , function (err, result, fields) {

                        //  console.log(result);
                    })
            }
        })
  

})
app.post("/AddToYear", (req, res) => {
    console.log("add to year")
    var r = req.body.RollNo
    var a = [];
    var c=0
    console.log("length", r.length)
var i=0;
for (var i in r){
    console.log(c+1)
    //console.log("for loop",r[i])
    var u= con.query("UPDATE user SET Placed=Placed+1 ,PlacedIN= (CONCAT(PlacedIN,'" + req.body.CName + ",')) WHERE RollNo ='" + r[i] + "'")
        console.log(u.sql)
    con.query("SELECT Branch FROM user WHERE RollNo='" + r[i] + "'", function (err, res) {
        console.log("array aaega",res[0])
        a.push(res[0].Branch)
        console.log("array", a)
       con.query(`UPDATE PlacementData SET ${res[0].Branch}=${res[0].Branch}+1  where Year="${req.body.year}"`)
        
    })
}
})

app.listen(3010)
