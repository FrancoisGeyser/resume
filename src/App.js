import React from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { ResumeDocument } from './resume/Document'
import { ResumeDownload } from './resume/DownLoad'

export function App() {
  return (
    <>
      <div className="button-container">
        <button>
          <PDFDownloadLink
            document={<ResumeDownload />}
            fileName={`FrancoisGeyser-FrontEndDev.pdf`}
          >
            {({ blob, url, loading, error }) =>
              loading ? 'Loading...' : 'Download'
            }
          </PDFDownloadLink>
        </button>
      </div>
      <ResumeDocument />
    </>
  )
}
