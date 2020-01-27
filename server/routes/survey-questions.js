const express = require("express");
const router = express.Router();
const surveyQuestionstManager = require("../manager/survey-questions");


// Gets all the items in the database
router.get("/", (req, res) => {
    surveyQuestionstManager.getQuestions().done(result => {
      if (result.err) {
        res.status(400).send();
      } else {
        res.json(result.data);
      }  
    });
  });


// Gets the questions associated with the specified field.
router.get("/:field", (req, res) => {
    surveyQuestionstManager.getQuestion(req.params.field).done(result => {
      if (result.err) {
        res.status(400).send();
      } else {
        res.json(result.data);
      }  
    });
  });
  module.exports = router;
