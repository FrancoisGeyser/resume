import React from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { ResumeDownload } from './resume/DownLoad'
import { Resume } from './resume/Resume'

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
      <Resume />
    </>
  )
}
