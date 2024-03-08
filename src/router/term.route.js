const express = require('express')

const { APP_ROUTER } = require('../constants/Router')

const {
    getAllTerm,
    getTermById,
    createTerm,
    updateTerm,
    deleteTerm,
} = require('../controller/Term/term.controller')

const router = express.Router()

router.get(APP_ROUTER.INDEX, getAllTerm)

router.get(APP_ROUTER.TERM_BY_ID, getTermById)

router.post(APP_ROUTER.INDEX, createTerm)

router.put(APP_ROUTER.TERM_BY_ID, updateTerm)

router.delete(APP_ROUTER.TERM_BY_ID, deleteTerm)

module.exports = router
