import { ProjectDetail } from 'containers/ProjectDetail'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import { projectInfos, ProjectInfo } from 'contents/projects'
const ProjectDetailPage: NextPage<ProjectInfo> = (props) => {
  return (
    <div>
      <ProjectDetail {...props} />
    </div>
  )
}

export default ProjectDetailPage

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(projectInfos).map((projectName) => ({
    params: {
      projectName
    }
  }))
  return {
    paths,
    fallback: false
  }
}
type Params = {
  params: {
    projectName: string
  }
}
export const getStaticProps: GetStaticProps = async (ctx: Params) => {
  const props = projectInfos[ctx.params?.projectName]
  return { props }
}
