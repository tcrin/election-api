const db = require("../common/connect");

exports.getAllVoter = async (req, res) => {
  db.query("SELECT * FROM voter", (err, result) => {
    if (err) {
      res.send("Lỗi");
    } else {
      res.send({ result: result.rows });
    }
  });
};

exports.getVoterSignIn = async (req, res) => {
  db.query(
    "select id_voter , first_name , last_name , dob , cccd , classes , avatar_url , achievement , title , voter.uid, signin.phone , signin.email , signin.created_at from voter inner join signin on voter.uid  = signin.uid  order by classes",
    (err, result) => {
      if (err) {
        res.send("Lỗi");
      } else {
        res.send({ result: result.rows });
      }
    }
  );
};



exports.insertVoter = async (req, res) => {
  db.query('insert into voter(first_name, last_name, dob, cccd, classes, avatar_url, achievement, title, uid) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)', (err, result) => {
    if (err) {
      res.send("Lỗi");
    } else {
      res.send({ result: result.rows });
    }
  });
};
