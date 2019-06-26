/**
 * Ensure that config is always called before anything else
 * even before import statements
 */
import { config } from 'dotenv';

config();
