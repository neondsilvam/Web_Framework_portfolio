export type Lang = 'es' | 'en'

export type Page = 'perfil' | 'web' | 'mobile' | 'contacto'

export interface Project {
  id: string
  title: string
  description: string
  iframeSrc: string
  section: string
  hasExternalLinks: boolean
  externalLinks: string
  isShowingTheProcess: boolean
  process: {
    sections:  {
      preproduction: {
        title: string
        description: string []
        media: string []
      }
      production: {
        title: string
        description: string []
        media: string []
      }
      postproduction: {
        title: string
        description: string []
        media: string []
      }
    }
    sectionFooter: string
  }
}

export interface ProjectTranslation {
    id: string
    title: string
    description: string
}

export interface Section {
  id: string
  label: string
}

export interface Translations {
  nav: {
    logo: string
    perfil: string
    web: string
    mobile: string
    contacto: string
    langBtn: string
  }
  perfil: {
    name: string
    role: string
    description: string
    tags: string[]
  }
  github: {
      sections: Section[]
      aclaration: string,
      projects: ProjectTranslation[]
      showingProcessButtonTextFalse: string
      showingProcessButtonTextTrue: string
  }
  webExp: {
      sections: Section[]
      aclaration: string,
      projects: ProjectTranslation[]
      showingProcessButtonTextFalse: string
      showingProcessButtonTextTrue: string
  }
  contacto: {
    title: string
    subtitle1: string
    subtitle2: string
    labels: {
      email: string
      phoneCol: string
      phoneCad: string
      location: string
      linkedin: string
      MainGithub: string
      SecondaryGithub: string
    }
  }
}
