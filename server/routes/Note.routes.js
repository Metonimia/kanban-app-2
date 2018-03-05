import { Router } from 'express';
import * as NoteController from '../controllers/Note.controller';

const router = new Router();

router.route('/notes').post(NoteController.addNote);
router.route('/notes/:noteId').delete(NoteController.deleteNote);

export default router;