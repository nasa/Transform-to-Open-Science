# Lesson 5: From Theory to Practice

## Navigation
* [Overview](#overview)
* [Learning Objectives](#learning-objectives)
* [Open Science and Data Management Plans](#open-science-and-data-management-plans)
* [How Do We Plan for Making our Code Open?](#how-do-we-plan-for-making-our-code-open)
* [Engage and Build Communities](#engage-and-build-communities)
* [Contribute to Open-Source Software](#contribute-to-open-source-software)
* [Additional Resources](#additional-resources)
* [Lesson 5: Summary](#lesson-5-summary)
* [Lesson 5: Knowledge Check](#lesson-5-knowledge-check)
* [Open Code Summary](#open-code-summary)

## Overview

This lesson ties the concepts of open access software development to the operation of a software management plan. The lesson also introduces you to the community aspect of open software. It begins with a discussion on writing software management plans, then continues with information on how to connect with open software communities. This information is contextualized with an introduction to the benefits of a software community and the roles involved in these groups. A list of communities is also presented, and you are asked to explore and engage with some of them. The lesson wraps up with helpful suggestions to contribute to open software and additional resources.

## Learning Objectives

After completing this lesson, you should be able to:

- Recall the definition of a software management plan, potentially as part of an open science and data management plan, and where to find helpful resources.
- List ways to engage with and contribute to open software communities.

## Open Science and Data Management Plans

<img style="width: 100%; height: auto;" src="../images/media/codebg.jpg">

"A NASA Open Science and Data Management Plan (OSDMP) describes how the scientific information that will be produced from NASA-funded scientific activities will be managed and made openly available. The OSDMP should include sections on data management, software management, and publication sharing."

**[https://science.nasa.gov/researchers/sara/faqs/](https://science.nasa.gov/researchers/sara/faqs/)**

---

Example sections to include in an OSDMP:

- Data Management Plan (DMP)
- Software Management Plan (SMP)
- Publication sharing
- Other open science activities
- Roles and responsibilities

#### Recall the steps for an SMP from the previous lessons

- **What:** Description of management, preservation, and release of software.
- **When:** The schedule for software archiving and sharing.
- **Where:** Location where software will be shared and archived over the long-term.
- **How:** Enable reuse of software through assigning a DOI, license, contribution guidelines, etc.
- **Who:** Roles and responsibilities of the team members.

<img style="width: 350px; height: auto;" src="../images/media/recallsteps.jpg">

## How Do We Plan for Making our Code Open?

### Should a Software or Data Management Plan be Written?

If you are planning a project that requires a data management plan, writing that plan is a good first step. There is a threshold above which you should write a software/data management plan. “Software” here means scientifically or technically relevant computer programs as both source code and executable software.

|  |  |
|---|---|
| SMP is required | You need a SMP to: <ul><li>Propose for funding (e.g., NASA, NSF, and likely everywhere soon)</li><li>Collaborate on a team that intends to release code to the public</li><li>Successfully manage any large mission or project</li></ul> |
| SMP is not required | You probably don't need a SMP if you are working on: <ul><li>A paper by yourself (or with a very small group of collaborators)</li><li>The initial exploration of ideas or experimentation with analysis code</li><li>Education-focused activities</li></ul> |

Perhaps your project does not fit into these categories. For example, if your aim is for your results to be reproduced by others then writing a SMP is your discretion.

The following material assumes that you have met the threshold and are writing a data/software management plan.

### Pen to Paper: Getting Started Writing a Plan

If you are applying for funding, it is almost guaranteed that there will be specific data management requirements detailed in the funding opportunity. For example, the funder may require a certain license or use of a specific repository. Make sure to cross reference your plan with these requirements.

**Examples of Software Management Plans**

- [software.ac.uk/resources/guides/software-management-plans](https://www.software.ac.uk/resources/guides/software-management-plans)
- [software.ac.uk/software-management-plans](https://www.software.ac.uk/resources/guides/software-management-plans)
- [esciencecenter.nl/national-guidelines-for-software-management-plans/](https://www.esciencecenter.nl/national-guidelines-for-software-management-plans/)
- [https://zenodo.org/record/7589725](https://zenodo.org/record/7589725)

**Policies**

What are the policies for a SMP? (what does the funding agency say to do?) 
- Data formats
- Plan for data/code archival/preservation 
- Roles and responsibilities

### Funding Agencies

Scientific funding agencies generally solicit peer reviews to support funding decisions. These reviews explicitly or implicitly evaluate related open software. Community participation is necessary to arrive at consensus regarding community standards for funding.

For example: [NASA policy](https://science.nasa.gov/spd-41) explicitly states that "funded software should follow best practices in the relevant open source and research communities."

### Established Open Software Policies of Professional Societies

Professional societies such as AAAS, AGU, AAS, etc., influence funding agency policies and directly influence the policies surrounding software used to generate publications. It is important to engage with the community via consensus papers and professional societies to guide policy decisions regarding open source software in science.

Science/AAAS explicitly states that "In general, all computer code central to the findings being reported should be available to readers to ensure reproducibility."

### Institutions

The individual institutions where we work impose highly variable restrictions on open source software due to security, privacy, intellectual property, commercial, or other concerns which do not necessarily align with the ethos of open science. It is important to engage with the institutional community to facilitate the movement toward policies that facilitate open source software as a foundation of open science.

### Activity 5.1: Writing an SMP

In this activity, review the SMP below and think about these questions: 

- What kinds of software does the SMP describe?
- When will it be shared? 
- Where will it be shared?
- How will it be shared so it is a citable artifact?
- Who will be responsible for different aspects of the software? 
- What are some of the limitations for some of the software?
- How does not having an agreed upon plan when you start code development have impacts years down the line?
- Are results reproducible without the original IDL code?
- Are there things in the example plan that you would add or be more specific about?

#### Example Software Management Plan

**1. Expected Software Types**

We will use established simulation models to conduct initial simulations for this work. These simulation models are written in Fortran and developed over the last decade. While not publicly available, they are available for the project to use (private communication). The simulation models will lead to the generation of output files as described in the Data Management Plan (DMP). We will develop analysis software in Python to analyze the model output files, which will enable the development of derived data products, maps, and figures. Development of the Python analysis software will be shared on a GitHub repository.

**2. Development of Analysis Software**

All new development of Python code will be conducted openly on GitHub by members of this project. We will post and follow the established Code of Conduct for software development for our research project, which includes guidelines for contributions by additional members of the scientific community.

**3. Repositories and Timeline for Sharing Software**

This work will support the development of two peer-reviewed journal articles. All source code developed in Python to support each article will be archived on Zenodo no later than the article’s publication date. The software will be made available under a permissive Apache License 2.0. Zenodo will assign a DOI to the archived software when it is archived.

**4. Software Sharing Exemptions**

This work does not support further development of the existing Fortran simulation models, which are maintained independently. We do not have permission to publicly share the Fortran source code for the simulation models.

**5. Roles and Responsibilities**

Initial simulation modeling and the development of Python analysis software will be completed by PhD students and postdocs. The PI of this project holds overall responsibility for the execution of this plan.

## Engage and Build Communities

Open software communities are social learning spaces where individuals come together to learn a new skill, exchange knowledge and experiences, and then apply what they've learned from the community in their day-to-day work.

#### Communities offer:

- A low entry point for learning and improving your use of software in research.
- An opportunity to share individual experiences, identify common hurdles, and iteratively enhance knowledge and resolve problems.
- A way to build the culture around open source software in science and a great way to keep updated on the latest tools and practices.
- A non-hierarchical community of practice where all members of the community should be treated equally.

### Connect with Communities

Here are some communities that can help you get started:

- [PyData](https://pydata.org/)
- [SPEC](https://scientific-python.org/specs/)
- [rOpenSci](https://ropensci.org/)
- [pyOpenSci](https://www.pyopensci.org/)
- [PyHC](https://heliopython.org/)
- [Research Software Engineering](https://society-rse.org/)
- [NumFOCUS](https://numfocus.org/)
- [R-Ladies](https://rladies.org/)
- [PyLadies](https://pyladies.com/)
- [WoCCode](https://woccode.github.io/)
- [Pangeo](https://pangeo.io/)
- [ObsPy](https://discourse.obspy.org/)

Subscribe to and/or participate in forums (e.g., GitHub discussions, Stack Overflow, or discipline/software specific), in-person workshops, conferences, hackathons, etc., related to your discipline or software you contribute to or use. Connect on social media. And last but not least, talk with your colleagues!

**Explore: The Turing Way**

**Hit the button to ﬁnd out more information on building a community.**

[CLICK TO LEARN](https://the-turing-way.netlify.app/collaboration/new-community.html)

### Activity 5.2: Browse Through Some of the Communities of Practice

<img style="width:350px;height:auto;" src="../images/media/lightbulb.png">

- Find and browse through the websites associated with two communities of practice listed on the previous section "Connecting with Communities".
- Identify at least two points of entry for engagement, e.g., an upcoming event (virtual or in person), how you could contribute, forums, etc.

#### Key takeaways: Browse through some of the communities of practice

- There are many opportunities to engage with communities working on open software.
- Engaging with open software communities can enrich and improve your software.

## Contribute to Open-Source Software

Contributing to open software provides many advantages and opens doors to a number of rewarding opportunities. There are few other industries that can boast the massive number of global contributions like the open-source community can. Contributing to open source software is a great way to improve your coding skills and to document your work while growing your community.

There are several types of contributing to open software. Not all of them require writing actual code:

|  |  |
|---|---|
| **Add New Features** | The most obvious case for contributing to open software is enhancing its usability by adding new features. |
| **Fix Bugs** | Alternatively, you can reply to an already opened issue by fixing it. |
| **Report Issues and Make Suggestions About Improving Code** | Reporting an issue is a valuable contribution even if you don’t know how to fix it. For example, you might be using a different browser in which the software has not been tested yet, have discovered a particularly uninformative error message, be colorblind or be otherwise able to feed a valuable user experience back to the developers that can help to improve the overall usability of the software. |
| **Improving and Contributing to Documentation** | Contributing to documentation constitutes a great starting point to contributing to open source software and is often overlooked in its importance. Writing documentations allows you to familiarize yourself with the use of the software, while helping to teach others. |
| **Create Tutorials, Use Cases, or Visuals** | Another way to contribute is to make your experience and use of the software publicly available. For example, you could create a tutorial based on your use of the software, summarize a use case or provide a summary of your use in a graphic. This part of contribution is particularly appealing as it does not create much extra work to just publish what you have used the software for. |
| **Improve Layout, Automatization, Structure of Code** | Apart from creating new code, a good way to contribute to open source software can also be to improve, restructure or automatize existing code. This is called refactoring and helps to make the software project more effective and stable. |
| **Organize and Attend a Community Meet-Up** | Another way to contribute to open source software is via community building. Many software products and toolboxes have a lively community of users that meet on a regular basis in person and online to discuss and improve the software and its use. Participating or even organizing such a meetup can be a good way to improve your knowledge of the software, get to know its community, and contribute to open source projects. |
| **Code Review** | Requests to integrate new contributions into the main code base usually require a review of the contribution by at least one other user. Similar to peer review, code review entails writing a short summary about the quality of the code and making suggestions about improvements. |

## Additional Resources

### References and Guides

In addition to the resources listed elsewhere in this training, the below community resources are excellent sources of information about Open Software.

- [OpenSciency](https://zenodo.org/record/7662732)
- [NASA SMD's Open-Source Science Guidance](https://science.nasa.gov/science-red/s3fs-public/atoms/files/SMD%20Open-Source%20Science%20Guidance%20v1%2020221208.pdf)
- [Practical Guide to Software Management](https://zenodo.org/record/7589725)
- [FAIR Principles for Research Software (FAIR4RS Principles)](https://zenodo.org/record/6623556)
- [Open Source Software Policy Options for NASA Earth and Space Sciences](https://doi.org/10.17226/25217)
- [Turing Way handbook to reproducible, ethical and collaborative data science](https://the-turing-way.netlify.app/index.html) 
- [Ten simple rules for documenting scientific software](https://doi.org/10.1371/journal.pcbi.1006561)
- [Journal of Open Source Software](https://joss.theoj.org/)

### Additional Training

In addition to the resources listed elsewhere in this training, the below resources represent additional training on Open Source Software.

- [Software Carpentries](https://software-carpentry.org/lessons/)
- [How to contribute to Open Source projects – A beginners guide](https://www.freecodecamp.org/news/how-to-contribute-to-open-source-projects-beginners-guide/)

### A Journal with Thousands of Open-Source Research Software Success Stories

[The Journal of Open Source Software](https://joss.theoj.org/) has presented a venue for enhancing the quality and minimizing the effort of publishing open source research software:

- Peer-reviewed, open source "journal" covering open source research software published via GitHub.
- The emphasis is on the software.
- Published thousands of open source research software projects, several of which are highly cited. JOSS is one of several journals. Click [here](https://www.software.ac.uk/which-journals-should-i-publish-my-software) for a list of many more journals that publish software.

## Lesson 5: Summary

In this lesson, you learned:

- When a SMP should be written and that your funding organization or institution may have rules around how you develop and share your code.
- That joining software communities can be a great way to exchange knowledge and learn new skills around open code.
- That there are many ways to contribute to open code, and that not all of them require writing code."

## Lesson 5: Knowledge Check

Answer the following questions to test what you have learned so far.

*Question*

**01/02**

Read the statement and decide whether it's true or false:

*Community engagement with open software is non-hierarchical; all members of the community should be treated the same.*

- True
- False

*Question*

**02/02**

Select the beneficial way(s) to contribute to open sources software.

- Add new features
- Fix bugs
- Document your work
- Refactoring
- All of the above

## Open Code Summary

Congratulations! Now you should be able to:

- Explain what open source software means, including the software development cycle, the benefits of open software, and some common limitations and how they are addressed.
- Discover open source software and assess it for reuse by evaluating provided documentation, including README files and licensing details; cite the software when appropriate.
- Create an open source software management plan that includes the strategy for selecting open software dependencies and open repositories such as GIT, and how open elements including metadata, README files and version control, will be included to make the software reusable and findable.
- Evaluate whether your open source software can be shared and the best options for sharing to increase visibility.
- List the responsibilities a software developer has once the open source software is shared including managing legal requirements and ensuring the software is maintained.