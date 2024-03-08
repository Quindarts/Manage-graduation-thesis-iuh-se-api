const express = require('express')

const { APP_ROUTER } = require('../constants/Router')

const {
    getAllTranscriptByGroupStudentId,
    createTranscript,
    updateTranscript,
    deleteTranscript,
} = require('../controller/Transcript/transcript.controller')

const router = express.Router()

router.get(
    APP_ROUTER.TRANSCRIPT_BY_GROUP_STUDENT,
    getAllTranscriptByGroupStudentId
)

router.post(APP_ROUTER.INDEX, createTranscript)

router.put(APP_ROUTER.TRANSCRIPT_BY_ID, updateTranscript)

router.delete(APP_ROUTER.TRANSCRIPT_BY_ID, deleteTranscript)

module.exports = router
