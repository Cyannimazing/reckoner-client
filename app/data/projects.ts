import boundaryRelocationImage from '~/assets/Images/boundary-relocation-1.jpg'
import topographicSurveyImage from '~/assets/Images/topographic-survey-1.jpg'
import structuralSurveyImage from '~/assets/Images/Structural-survey.jpg'
import hydrographicImage from '~/assets/Images/hydrographic-survey.jpg'
import asBuiltImage from '~/assets/Images/as-build.jpg'
import caapImage from '~/assets/Images/caap-height-limit.jpg'
import droneSurveyImage from '~/assets/Images/drone-survey.webp'
import statusImage from '~/assets/Images/status-image.jpg'
import statusImageTwo from '~/assets/Images/status-image2.jpg'
import originalResurveyImage from '~/assets/Images/original-resurvey.jpg'
import subdivisionConsolidationImage from '~/assets/Images/subdivision-consolidation.jpg'

export type ProjectStatus = 'Ongoing' | 'Upcoming' | 'Finished'

interface ProjectMediaBase {
  title: string
  caption: string
}

export type ProjectMedia =
  | (ProjectMediaBase & {
    type: 'image'
    source: string
    poster?: never
    embedUrl?: never
  })
  | (ProjectMediaBase & {
    type: 'video'
    poster: string
    embedUrl?: string
    source?: never
  })

export interface Project {
  uuid: string
  id: string
  client: string
  category: string
  sector: string
  title: string
  location: string
  region: string
  image: string
  status: ProjectStatus
  year: string
  duration: string
  summary: string
  challenge: string
  approach: string[]
  deliverables: string[]
  coordinates: string
  media: ProjectMedia[]
}

export const projects: Project[] = [
  {
    uuid: '8f3b6d2a-41c7-4e9a-b1d8-2c6f73a95101',
    id: '01',
    client: 'Reckoner Geospatial',
    category: 'Boundary Survey',
    sector: 'Residential',
    title: 'Boundary Relocation Survey and Land Verification',
    location: 'Davao City, Philippines',
    region: 'Davao Region',
    image: boundaryRelocationImage,
    status: 'Finished',
    year: '2026',
    duration: '3 weeks',
    coordinates: 'N 7.1907, E 125.4553',
    summary: 'A documentation-first boundary verification project focused on confirming property limits, resolving marker positions, and preparing clear references for future site development.',
    challenge: 'The site required careful validation of existing monument references against client records and field observations, with special attention to avoiding inconsistencies before construction planning moved forward.',
    approach: [
      'Recovered and verified visible boundary monuments across the project site.',
      'Cross-checked field measurements against available technical descriptions.',
      'Prepared a clean boundary reference package for client review and next-step coordination.',
    ],
    deliverables: [
      'Boundary relocation plan',
      'Monument recovery notes',
      'Field observation summary',
      'Client-ready verification report',
    ],
    media: [
      {
        type: 'image',
        title: 'Boundary Verification Field View',
        caption: 'Site imagery used to support boundary marker verification and client reporting.',
        source: boundaryRelocationImage,
      },
      {
        type: 'image',
        title: 'Reference Survey Context',
        caption: 'Supplemental field context for validating visible monuments and nearby features.',
        source: originalResurveyImage,
      },
      {
        type: 'video',
        title: 'Field Walkthrough Video',
        caption: 'Optional walkthrough slot for drone footage, site review clips, or client presentation videos.',
        poster: droneSurveyImage,
      },
    ],
  },
  {
    uuid: 'b21c9a74-6e25-4c37-8a54-4fd2f38b2202',
    id: '02',
    client: 'Reckoner Geospatial',
    category: 'Topographic Survey',
    sector: 'Infrastructure',
    title: 'Topographic Mapping and Terrain Analysis',
    location: 'Samal Island, Philippines',
    region: 'Davao Region',
    image: topographicSurveyImage,
    status: 'Ongoing',
    year: '2026',
    duration: '5 weeks',
    coordinates: 'N 7.0744, E 125.7081',
    summary: 'A terrain documentation project capturing elevation behavior, natural features, and usable site intelligence for early engineering and planning decisions.',
    challenge: 'The terrain profile includes changing elevations and mixed surface conditions, requiring consistent control points and field coverage that would remain useful for design coordination.',
    approach: [
      'Established survey control points for repeatable terrain observations.',
      'Captured elevation, breakline, and feature data across the target area.',
      'Organized the resulting data into planning-friendly drawings and references.',
    ],
    deliverables: [
      'Topographic base map',
      'Elevation and contour references',
      'Feature inventory',
      'Terrain analysis notes',
    ],
    media: [
      {
        type: 'image',
        title: 'Terrain Capture Overview',
        caption: 'Topographic visual reference for elevation and terrain documentation.',
        source: topographicSurveyImage,
      },
      {
        type: 'image',
        title: 'Drone Survey Coverage',
        caption: 'Aerial survey context for mapping coverage and feature visibility.',
        source: droneSurveyImage,
      },
      {
        type: 'video',
        title: 'Aerial Mapping Clip',
        caption: 'Video-ready slot for showing terrain flyovers or mapping process footage.',
        poster: topographicSurveyImage,
      },
    ],
  },
  {
    uuid: 'c64e7f10-91a2-426c-b267-74a6e88b3303',
    id: '03',
    client: 'Reckoner Geospatial',
    category: 'Structural Survey',
    sector: 'Commercial',
    title: 'Construction Staking and Structural Layout',
    location: 'Davao del Sur, Philippines',
    region: 'Davao Region',
    image: structuralSurveyImage,
    status: 'Finished',
    year: '2026',
    duration: '2 weeks',
    coordinates: 'N 6.7663, E 125.3284',
    summary: 'A precision layout engagement translating design intent into dependable site references for structural works and construction coordination.',
    challenge: 'The project needed tight alignment between plan geometry and field staking so construction teams could proceed with confidence and reduce layout-related rework.',
    approach: [
      'Reviewed layout requirements against provided construction drawings.',
      'Established stakeout references for primary structural points.',
      'Verified field positions and documented layout observations for handoff.',
    ],
    deliverables: [
      'Stakeout reference points',
      'Structural layout notes',
      'Field verification summary',
      'Construction coordination references',
    ],
    media: [
      {
        type: 'image',
        title: 'Structural Layout Reference',
        caption: 'Construction staking context used for structural point coordination.',
        source: structuralSurveyImage,
      },
      {
        type: 'image',
        title: 'Field Status Documentation',
        caption: 'Progress imagery for recording layout activity and site coordination.',
        source: statusImage,
      },
      {
        type: 'video',
        title: 'Stakeout Process Video',
        caption: 'Optional media slot for layout process clips or engineer walkthroughs.',
        poster: structuralSurveyImage,
      },
    ],
  },
  {
    uuid: 'de879ab4-4d0e-46f6-a148-8a311f0d4404',
    id: '04',
    client: 'Reckoner Geospatial',
    category: 'Hydrographic Survey',
    sector: 'Infrastructure',
    title: 'Hydrographic Survey for Coastal Development',
    location: 'Davao Gulf, Philippines',
    region: 'Davao Region',
    image: hydrographicImage,
    status: 'Upcoming',
    year: '2026',
    duration: '4 weeks',
    coordinates: 'N 6.9222, E 125.7765',
    summary: 'A coastal documentation project planned to support development decisions through water-depth references, shoreline context, and survey-grade bathymetric insight.',
    challenge: 'The work requires timing field activity around marine conditions while maintaining consistent references between shoreline and water-based observations.',
    approach: [
      'Plan shoreline and bathymetric observation zones.',
      'Coordinate field windows around safe and useful water conditions.',
      'Prepare hydrographic outputs for engineering and permitting review.',
    ],
    deliverables: [
      'Bathymetric reference plan',
      'Shoreline observation notes',
      'Depth profile documentation',
      'Coastal development support package',
    ],
    media: [
      {
        type: 'image',
        title: 'Coastal Survey Context',
        caption: 'Hydrographic project imagery for shoreline and water-based documentation.',
        source: hydrographicImage,
      },
      {
        type: 'image',
        title: 'Survey Status Reference',
        caption: 'Supplemental field documentation for planned observation windows.',
        source: statusImageTwo,
      },
      {
        type: 'video',
        title: 'Coastal Development Clip',
        caption: 'Video-ready slot for shoreline, vessel, or bathymetric observation footage.',
        poster: hydrographicImage,
      },
    ],
  },
  {
    uuid: 'ef15a2c7-7b90-41ac-b9a7-934ad5a95505',
    id: '05',
    client: 'Reckoner Geospatial',
    category: 'As-Built Survey',
    sector: 'Commercial',
    title: 'As-Built Survey for Commercial Infrastructure',
    location: 'Tagum City, Philippines',
    region: 'Davao Region',
    image: asBuiltImage,
    status: 'Ongoing',
    year: '2026',
    duration: '3 weeks',
    coordinates: 'N 7.4478, E 125.8076',
    summary: 'A post-construction documentation effort capturing installed conditions and turning field reality into clear records for facilities, maintenance, and compliance use.',
    challenge: 'The site includes multiple built elements that need to be documented cleanly so stakeholders can compare actual conditions against design and future maintenance needs.',
    approach: [
      'Captured installed feature locations and visible infrastructure references.',
      'Compared field observations with available construction documentation.',
      'Prepared a consolidated as-built package for owner records.',
    ],
    deliverables: [
      'As-built drawing references',
      'Installed feature inventory',
      'Field discrepancy notes',
      'Owner record documentation',
    ],
    media: [
      {
        type: 'image',
        title: 'As-Built Site View',
        caption: 'Installed-condition imagery for final documentation and owner records.',
        source: asBuiltImage,
      },
      {
        type: 'image',
        title: 'Completion Status Reference',
        caption: 'Supplemental project status imagery for comparing actual conditions.',
        source: statusImage,
      },
      {
        type: 'video',
        title: 'As-Built Walkthrough',
        caption: 'Optional slot for walkthrough footage or stakeholder review videos.',
        poster: asBuiltImage,
      },
    ],
  },
  {
    uuid: 'f59b0c3e-31d8-4e5b-921f-0d7e59c86606',
    id: '06',
    client: 'Reckoner Geospatial',
    category: 'CAAP Survey',
    sector: 'Infrastructure',
    title: 'CAAP Height Limitation Survey Near Airport Zone',
    location: 'General Santos, Philippines',
    region: 'Mindanao',
    image: caapImage,
    status: 'Upcoming',
    year: '2026',
    duration: '2 weeks',
    coordinates: 'N 6.1164, E 125.1716',
    summary: 'A regulatory support survey intended to document structure height context near an airport zone and support aviation-related clearance review.',
    challenge: 'The project requires careful elevation documentation and clear reporting so review teams can understand height relationships within the controlled airport environment.',
    approach: [
      'Establish elevation references suitable for height limitation review.',
      'Measure relevant site and structure positions.',
      'Compile documentation in a format suitable for clearance coordination.',
    ],
    deliverables: [
      'Height limitation survey notes',
      'Elevation reference summary',
      'Airport-zone location documentation',
      'Clearance support package',
    ],
    media: [
      {
        type: 'image',
        title: 'Airport Zone Height Context',
        caption: 'CAAP-related survey imagery for height limitation documentation.',
        source: caapImage,
      },
      {
        type: 'image',
        title: 'Aerial Survey Reference',
        caption: 'Aerial context for reviewing site position and surrounding clearances.',
        source: droneSurveyImage,
      },
      {
        type: 'video',
        title: 'Clearance Review Video',
        caption: 'Video-ready slot for site walkthroughs or aviation clearance review clips.',
        poster: caapImage,
      },
    ],
  },
  {
    uuid: 'a7d42e18-2c61-4f7d-8c05-63bfa2a71207',
    id: '07',
    client: 'Reckoner Geospatial',
    category: 'Original Survey',
    sector: 'Residential',
    title: 'Original Land Survey for Residential Development',
    location: 'Panabo City, Philippines',
    region: 'Davao Region',
    image: originalResurveyImage,
    status: 'Finished',
    year: '2026',
    duration: '4 weeks',
    coordinates: 'N 7.3081, E 125.6841',
    summary: 'A first-record survey package prepared to establish reliable site references for a planned residential development.',
    challenge: 'The work required building a clean survey basis from field observations, nearby references, and site conditions before subdivision planning could begin.',
    approach: [
      'Established initial control references and verified surrounding site context.',
      'Captured property limits, visible improvements, and field conditions.',
      'Prepared documentation suitable for planning and technical coordination.',
    ],
    deliverables: [
      'Original survey plan',
      'Field observation records',
      'Control reference notes',
      'Technical documentation package',
    ],
    media: [
      {
        type: 'image',
        title: 'Original Survey Site Context',
        caption: 'Field imagery supporting initial property documentation.',
        source: originalResurveyImage,
      },
      {
        type: 'image',
        title: 'Aerial Field Reference',
        caption: 'Aerial context used for site planning and coverage review.',
        source: droneSurveyImage,
      },
      {
        type: 'video',
        title: 'Original Survey Walkthrough',
        caption: 'Video-ready slot for site walkthrough or survey process clips.',
        poster: originalResurveyImage,
      },
    ],
  },
  {
    uuid: '18cb5f3d-921a-463b-9b70-dc6e3e461208',
    id: '08',
    client: 'Reckoner Geospatial',
    category: 'Subdivision Survey',
    sector: 'Residential',
    title: 'Subdivision and Consolidation Survey Package',
    location: 'Digos City, Philippines',
    region: 'Davao Region',
    image: subdivisionConsolidationImage,
    status: 'Ongoing',
    year: '2026',
    duration: '6 weeks',
    coordinates: 'N 6.7497, E 125.3572',
    summary: 'A cadastral documentation project organizing lot relationships, subdivision intent, and technical references for review.',
    challenge: 'The site required careful coordination of existing lot descriptions and proposed parcel layout so the final package could support approval workflows.',
    approach: [
      'Reviewed existing lot records and proposed parcel requirements.',
      'Captured field references and verified boundary relationships.',
      'Prepared subdivision documentation for stakeholder and technical review.',
    ],
    deliverables: [
      'Subdivision plan package',
      'Lot relationship notes',
      'Boundary reference summary',
      'Review-ready documentation',
    ],
    media: [
      {
        type: 'image',
        title: 'Subdivision Survey Reference',
        caption: 'Site imagery for subdivision and consolidation documentation.',
        source: subdivisionConsolidationImage,
      },
      {
        type: 'image',
        title: 'Field Status Capture',
        caption: 'Supplemental image for tracking survey progress.',
        source: statusImageTwo,
      },
      {
        type: 'video',
        title: 'Subdivision Review Clip',
        caption: 'Video-ready slot for parcel layout walkthroughs.',
        poster: subdivisionConsolidationImage,
      },
    ],
  },
  {
    uuid: '2ac8b04f-5dd2-4fd9-aac8-1d960b6d1309',
    id: '09',
    client: 'Reckoner Geospatial',
    category: 'Drone Survey',
    sector: 'Infrastructure',
    title: 'Drone Survey for Site Progress Monitoring',
    location: 'Mati City, Philippines',
    region: 'Mindanao',
    image: droneSurveyImage,
    status: 'Finished',
    year: '2026',
    duration: '1 week',
    coordinates: 'N 6.9551, E 126.2166',
    summary: 'A rapid aerial documentation project designed to capture site progress, terrain context, and visual records for coordination.',
    challenge: 'The work needed useful visual coverage while maintaining consistent capture angles and documentation quality across the target area.',
    approach: [
      'Planned aerial coverage zones and safe capture paths.',
      'Captured drone imagery for progress and context review.',
      'Organized visual references into a documentation-ready package.',
    ],
    deliverables: [
      'Drone image set',
      'Site progress references',
      'Aerial coverage notes',
      'Visual documentation package',
    ],
    media: [
      {
        type: 'image',
        title: 'Drone Survey Coverage',
        caption: 'Aerial imagery used for site progress monitoring.',
        source: droneSurveyImage,
      },
      {
        type: 'image',
        title: 'Progress Status Image',
        caption: 'Ground-level reference paired with aerial documentation.',
        source: statusImage,
      },
      {
        type: 'video',
        title: 'Drone Flight Preview',
        caption: 'Video-ready slot for drone flyover footage.',
        poster: droneSurveyImage,
      },
    ],
  },
  {
    uuid: '37f0a85d-d7d4-4e66-95a1-68bdac6e140a',
    id: '10',
    client: 'Reckoner Geospatial',
    category: 'Relocation Survey',
    sector: 'Commercial',
    title: 'Commercial Lot Relocation and Verification Survey',
    location: 'Koronadal City, Philippines',
    region: 'Mindanao',
    image: boundaryRelocationImage,
    status: 'Upcoming',
    year: '2026',
    duration: '3 weeks',
    coordinates: 'N 6.4974, E 124.8472',
    summary: 'A commercial boundary verification project prepared to support site planning, leasing review, and owner documentation.',
    challenge: 'The project requires accurate relocation of boundary references in a commercially active area with limited tolerance for ambiguous site limits.',
    approach: [
      'Validate existing technical descriptions against field evidence.',
      'Recover and relocate boundary markers where required.',
      'Prepare owner-facing verification records and plan references.',
    ],
    deliverables: [
      'Relocation survey plan',
      'Boundary verification notes',
      'Marker recovery summary',
      'Owner documentation packet',
    ],
    media: [
      {
        type: 'image',
        title: 'Commercial Relocation Site',
        caption: 'Field image for relocation and boundary verification records.',
        source: boundaryRelocationImage,
      },
      {
        type: 'image',
        title: 'Survey Context Image',
        caption: 'Supplemental image for surrounding site reference.',
        source: originalResurveyImage,
      },
      {
        type: 'video',
        title: 'Commercial Site Walkthrough',
        caption: 'Video-ready slot for client review clips.',
        poster: boundaryRelocationImage,
      },
    ],
  },
  {
    uuid: '49e3c92a-1a2d-45be-a047-f4b34c61150b',
    id: '11',
    client: 'Reckoner Geospatial',
    category: 'Topographic Survey',
    sector: 'Commercial',
    title: 'Commercial Site Topographic and Feature Survey',
    location: 'Butuan City, Philippines',
    region: 'Mindanao',
    image: topographicSurveyImage,
    status: 'Ongoing',
    year: '2026',
    duration: '4 weeks',
    coordinates: 'N 8.9475, E 125.5406',
    summary: 'A site intelligence project capturing terrain, features, and elevation references for commercial design coordination.',
    challenge: 'The site includes mixed terrain and existing features that need to be documented clearly before design teams finalize layout decisions.',
    approach: [
      'Established control points and captured terrain observations.',
      'Mapped visible features, elevation changes, and access references.',
      'Prepared drawing outputs for design and stakeholder coordination.',
    ],
    deliverables: [
      'Topographic drawing package',
      'Feature survey notes',
      'Elevation references',
      'Design coordination records',
    ],
    media: [
      {
        type: 'image',
        title: 'Commercial Topographic Survey',
        caption: 'Terrain reference image for commercial design coordination.',
        source: topographicSurveyImage,
      },
      {
        type: 'image',
        title: 'Drone Site Reference',
        caption: 'Aerial visual support for terrain coverage.',
        source: droneSurveyImage,
      },
      {
        type: 'video',
        title: 'Topographic Survey Clip',
        caption: 'Video-ready slot for field process or drone footage.',
        poster: topographicSurveyImage,
      },
    ],
  },
  {
    uuid: '5d764bd0-0fb5-4ca0-a951-a1e65189160c',
    id: '12',
    client: 'Reckoner Geospatial',
    category: 'As-Built Survey',
    sector: 'Infrastructure',
    title: 'Infrastructure As-Built and Compliance Documentation',
    location: 'Cagayan de Oro, Philippines',
    region: 'Mindanao',
    image: asBuiltImage,
    status: 'Finished',
    year: '2026',
    duration: '5 weeks',
    coordinates: 'N 8.4542, E 124.6319',
    summary: 'A final documentation project capturing completed infrastructure conditions for compliance, turnover, and maintenance records.',
    challenge: 'The completed works needed to be documented accurately so operations teams could rely on the final record set after handover.',
    approach: [
      'Captured installed infrastructure and visible site references.',
      'Compared field records with available design and construction information.',
      'Prepared a final as-built documentation package for turnover.',
    ],
    deliverables: [
      'As-built survey drawings',
      'Compliance documentation notes',
      'Installed infrastructure records',
      'Turnover documentation package',
    ],
    media: [
      {
        type: 'image',
        title: 'Infrastructure As-Built View',
        caption: 'Installed-condition image for compliance documentation.',
        source: asBuiltImage,
      },
      {
        type: 'image',
        title: 'Completion Reference',
        caption: 'Supplemental status imagery for turnover records.',
        source: statusImageTwo,
      },
      {
        type: 'video',
        title: 'Turnover Walkthrough',
        caption: 'Video-ready slot for final walkthrough or inspection clips.',
        poster: asBuiltImage,
      },
    ],
  },
]

export const findProjectByUuid = (uuid: string) => {
  return projects.find(project => project.uuid === uuid)
}
