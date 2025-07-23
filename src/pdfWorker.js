// src/pdfWorker.js
import { GlobalWorkerOptions } from 'pdfjs-dist/build/pdf';
// Import as a URL string (correct type)
import workerUrl from 'pdfjs-dist/build/pdf.worker?url';

GlobalWorkerOptions.workerSrc = workerUrl;
