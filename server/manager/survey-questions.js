"use strict";

const Q = require("q");
const mongoose = require("mongoose");
const Survey = mongoose.model("Survey");

const self = {};

/**
 * Gets all the questions in the database. 
 *
 * @returns {promise|*}   A promise object that contains these properties:
 *                        - err: indicates if there is an error (TRUE/FALSE);
 *                        - data: the list of the questions.
 */
self.getQuestions = () => {
    const deferred = Q.defer();
    Survey.find((err, data) => {
      if (err) {
        deferred.resolve({ err: false, data: [] });
      } else {
        deferred.resolve({ err: false, data: data });
      }
    });
    return deferred.promise;
  };

/**
 * Gets the questions associated with the field specified.
 *
 * @param field       The field associated with the question to retrieve.
 * @returns {promise|*}   A promise object that contains these properties:
 *                        - err: indicates if there is an error (TRUE/FALSE);
 *                        - data: the question associated with the field specified.
 */
self.getQuestion = (field) => {
  const deferred = Q.defer();
  let filter = {_id:0}

  if (field !== undefined) {
    filter[field]=1

    Survey.aggregate([{$group:{ _id: "$"+field, myCount:{$sum: 1}}}],(err, data) => {
      if (err) {
        alert("Erreur dans l'appel a la db: "+ err)
        deferred.resolve({ err: false, data: [] });
      } else {
        deferred.resolve({ err: false, data: data });
      }
    });
  }
 else {
  deferred.resolve({ err: true, data: null });
 }
  return deferred.promise;
};

  module.exports = self;
