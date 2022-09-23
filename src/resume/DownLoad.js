import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  pageOuter: {
    position: 'relative',
    fontFamily: 'Roboto',
    fontSize: 10,
    backgroundColor: '#fff',
    padding: '0 10',
    margin: '20 0',
  },
  pageInner: {
    margin: '10px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pageSection: {
    display: 'flex',
    flexDirection: 'column',
    margin: '10 0 10 0',
  },
  pageSectionSkills: {
    display: 'flex',
    flexDirection: 'column',
    margin: '10 0 10 0',
    width: '28%',
    marginRight: '5%',
  },
  pageSectionHistory: {
    display: 'flex',
    flexDirection: 'column',
    margin: '10 0 10 0',
    width: '67%',
  },

  name: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 700,
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 15,
  },
  experience: {
    marginBottom: 10,
    fontSize: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contact: {
    width: '100%',
    fontSize: 11,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  detailSection: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    fontWeight: 700,
    marginBottom: 15,
  },
  heading: {
    fontSize: 12,
    marginBottom: 5,
    fontWeight: 700,
  },
  subheading: {
    fontSize: 11,
    marginBottom: 5,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lightgray',
    padding: '5px 7px',
    borderRadius: '7px',
  },
  link: {
    fontSize: 'inherit',
    textDecoration: 'inherit',
    color: 'inherit',
  },
  body: {
    marginLeft: '7px',
    marginBottom: '5px',
  },
  skill: {
    backgroundColor: 'lightgray',
    padding: '5px 10px',
    borderRadius: '5px',
    marginBottom: '5px',
  },
})

export const ResumeDownload = () => (
  <Document>
    <Page size="A4" style={styles.pageOuter} wrap>
      <View style={styles.pageSection}>
        <View style={styles.name}>
          <Text>Francois Geyser</Text>
        </View>

        <View style={styles.title}>
          <Text>FrontEnd Developer</Text>
        </View>

        <View style={styles.contact}>
          <View style={styles.experience}>
            <Text style={{ marginRight: '10px' }}>fegeyser@gmail.com</Text>
            <Text>Telegram: +7 999 800 3622</Text>
          </View>
          <Text>
            I am available for full time positions, contract and project work.
          </Text>
        </View>
      </View>

      <View style={styles.pageInner}>
        <View style={styles.pageSectionSkills}>
          <Text style={styles.label}>Skills</Text>

          <View style={styles.detailSection}>
            <Text style={styles.heading}>System</Text>
            <Text style={styles.skill}>Front-end architecture design</Text>
            <Text style={styles.skill}>State management design</Text>
            <Text style={styles.heading}>Languages</Text>
            <Text style={styles.skill}>Javascript / Typescript</Text>
            <Text style={styles.heading}>Frameworks</Text>
            <Text style={styles.skill}>React</Text>
            <Text style={styles.skill}>NextJS</Text>
            <Text style={styles.heading}>State Management</Text>
            <Text style={styles.skill}>Redux</Text>
            <Text style={styles.skill}>Redux-Saga</Text>
            <Text style={styles.skill}>Redux-Thunk</Text>
            <Text style={styles.skill}>React-Query</Text>
            <Text style={styles.skill}>Recoil</Text>
            <Text style={styles.heading}>Styling</Text>
            <Text style={styles.skill}>CSS</Text>
            <Text style={styles.skill}>CSS-Modules</Text>
            <Text style={styles.skill}>SCSS</Text>
            <Text style={styles.skill}>LESS</Text>
            <Text style={styles.skill}>Styled-Components</Text>
            <Text style={styles.heading}>Tools</Text>
            <Text style={styles.skill}>Webpack</Text>
            <Text style={styles.skill}>Docker</Text>
            <Text style={styles.skill}>Jira</Text>
          </View>
        </View>

        <View style={styles.pageSectionHistory}>
          <View style={styles.detailSection}>
            <Text style={styles.label}>Work experience (4.5&nbsp;years)</Text>

            <View style={styles.detailSection}>
              <Text style={styles.heading}>FrontEnd Developer</Text>
              <View style={styles.subheading}>
                <Text>Hireeex ( 2022/08 - current )</Text>
                <Text style={{ textAlign: 'right' }}>https://hireeex.com</Text>
              </View>
              <Text style={styles.body}>Contract</Text>
              <Text style={styles.body}>Update React & Redux</Text>
              <Text style={styles.body}>
                Add business logic and functionality
              </Text>
              <Text style={styles.body}>Identify and solve legacy errors</Text>
              <Text style={styles.body}>Code optimization</Text>
              <Text style={styles.body}>Stack: React, Redux, Redux-Thunk</Text>
            </View>

            <View style={styles.detailSection}>
              <Text style={styles.heading}>Freelance Developer</Text>
              <View style={styles.subheading}>
                <Text>Freelance ( 2022-02 - 2022/08 )</Text>
              </View>
            </View>

            <View style={styles.detailSection}>
              <Text style={styles.heading}>Middle FrontEnd Developer</Text>
              <View style={styles.subheading}>
                <Text>Look Online ( 2021/09 - 2022/01 )</Text>
                <Text style={{ textAlign: 'right' }}>https://look.online</Text>
              </View>
              <Text style={styles.body}>Full time</Text>
              <Text style={styles.body}>
                Create new components and business logic
              </Text>
              <Text style={styles.body}>
                Restyling of pages as designs are updated
              </Text>
              <Text style={styles.body}>Create new admin portal</Text>
              <Text style={styles.body}>
                Stack: NextJS, React, Recoil, Less / SCSS-Modules,
              </Text>
            </View>

            <View style={styles.detailSection}>
              <Text style={styles.heading}>Middle FrontEnd Developer</Text>
              <View style={styles.subheading}>
                <Text>YouCoach ( 2021/05 - 2021/08 )</Text>
              </View>
              <Text style={styles.body}>Contract / Startup</Text>
              <Text style={styles.body}>Create MVP</Text>
              <Text style={styles.body}>Implement SSR</Text>
              <Text style={styles.body}>
                Design and develop component library
              </Text>
              <Text style={styles.body}>
                Design and develop frontend architecture
              </Text>
              <Text style={styles.body}>
                Design and develop state management system
              </Text>
              <Text style={styles.body}>
                Implement e2e, integration and unit testing
              </Text>
              <Text style={styles.body}>
                Stack: Node, TypeScript, React, React-Router, React-Query,
                Styled-Components, GSAP, StoryBook, Jest, React-Testing-Library,
                Cypress
              </Text>
            </View>

            <View style={styles.detailSection} wrap={false}>
              <Text style={styles.heading}>Middle FrontEnd Developer</Text>
              <View style={styles.subheading}>
                <Text>TalkTime LLC ( 2021/02 - 2021/05 )</Text>
                <Text style={{ textAlign: 'right' }}>https://talktime.ru</Text>
              </View>
              <Text style={styles.body}>Full time</Text>
              <Text style={styles.body}>Convert MVP to full product</Text>
              <Text style={styles.body}>
                Create custom components and business locig removing all ui
                library components
              </Text>
              <Text style={styles.body}>
                Design and develop state management system
              </Text>
              <Text style={styles.body}>
                Implement e2e, integration and unit testing
              </Text>
              <Text style={styles.body}>
                Stack: Webpack, TypeScript, React, React-Router, Redux,
                Redux-saga, Styled-Components, Formik, Jest, Cypress,
                React-Testing-Library
              </Text>
            </View>

            <View style={styles.detailSection}>
              <Text style={styles.heading}>Freelance Developer</Text>
              <View style={styles.subheading}>
                <Text>Freelance ( 2018-02 - 2021/02 )</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
)
