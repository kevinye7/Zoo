# Zoo Templates Documentation

This directory contains template files for creating new animal detail pages and zoo main pages. These templates ensure consistency across the entire zoo website while making it easy to add new content.

## 📁 Template Files

### `animal-template.html`
Template for creating individual animal detail pages with comprehensive educational content.

### `zoo-template.html`
Template for creating main zoo pages that showcase multiple animals in a grid layout.

## 🐾 Creating a New Animal Page

### Step 1: Copy the Template
```bash
cp templates/animal-template.html david-[animal-name].html
```

### Step 2: Replace Placeholder Values
Use find-and-replace to update all `[PLACEHOLDER]` values:

#### Basic Information
- `[ANIMAL_NAME]` → The animal's common name (e.g., "Giant Panda")
- `[ZOO_NAME]` → The zoo name (e.g., "David's Zoo")
- `[SCIENTIFIC_NAME]` → Scientific name (e.g., "Ailuropoda melanoleuca")
- `[COMMON_NAMES]` → Alternative names (e.g., "Panda Bear, Bamboo Bear")

#### Visual Elements
- `[HERO_IMAGE]` → Main hero image filename (e.g., "GiantPanda.png")
- `[GALLERY_IMAGE_1-4]` → Gallery image filenames
- `[GALLERY_ALT_1-4]` → Alt text for gallery images
- `[GALLERY_CAPTION_1-4]` → Captions for gallery images

#### Styling
- `[PRIMARY_COLOR]` → Hero background primary color (e.g., "#2c5530")
- `[SECONDARY_COLOR]` → Hero background secondary color (e.g., "#4a7c59")
- `[PATTERN_NAME]` → Unique pattern identifier (e.g., "bamboo")
- `[PATTERN_SHAPE]` → SVG pattern shape

#### Content Sections
- `[ANIMAL_SUBTITLE]` → Hero section subtitle
- `[ANIMAL_INTRODUCTION_PARAGRAPH]` → Opening paragraph
- `[ANIMAL_DETAILED_DESCRIPTION]` → Detailed description
- `[PHYSICAL_DESCRIPTION_INTRO]` → Physical characteristics intro
- `[SIZE_INFO]` → Size information
- `[FEATURE_1-5]` → Physical features and descriptions
- `[HABITAT_DESCRIPTION]` → Habitat overview
- `[LOCATION_1-4]` → Geographic locations
- `[HABITAT_DETAILS]` → Detailed habitat information
- `[DIET_DESCRIPTION]` → Diet overview
- `[FOOD_TYPE_1-4]` → Food types and descriptions
- `[BEHAVIOR_DESCRIPTION]` → Behavioral information

#### Conservation Information
- `[CONSERVATION_STATUS]` → IUCN status (e.g., "VULNERABLE")
- `[CONSERVATION_MESSAGE]` → Conservation highlight message
- `[CONSERVATION_CHALLENGES_INTRO]` → Challenges introduction
- `[THREAT_1-4]` → Threats and descriptions
- `[CONSERVATION_EFFORTS_INTRO]` → Efforts introduction
- `[EFFORT_1-4]` → Conservation efforts and descriptions

#### Sidebar Information
- `[SIZE_SHORT]` → Brief size description
- `[WEIGHT_RANGE]` → Weight range
- `[LIFESPAN]` → Lifespan information
- `[DIET_TYPE]` → Diet classification
- `[HABITAT_TYPE]` → Habitat type
- `[ACTIVITY_PATTERN]` → Activity pattern (e.g., "Nocturnal")
- `[CONSERVATION_STATUS_SHORT]` → Brief conservation status
- `[ADAPTATION_1-6]` → Amazing adaptations
- `[STAT_1-3_NUMBER]` → Statistics numbers
- `[STAT_1-3_LABEL]` → Statistics labels

#### Citations
- `[AUTHOR_1-8]` → Author names
- `[YEAR_1-8]` → Publication years
- `[TITLE_1-7]` → Publication titles
- `[JOURNAL_1-4]` → Journal names
- `[PUBLISHER_1-2]` → Publisher names
- `[ORGANIZATION_1-3]` → Organization names
- `[URL_1-3]` → Website URLs
- `[WEBSITE_1-3]` → Website names
- `[BOOK_TITLE]` → Book title
- `[VOLUME_1-3]` → Volume numbers
- `[ISSUE_1-3]` → Issue numbers
- `[PAGES_1-3]` → Page numbers
- `[CURRENT_DATE]` → Current date

### Step 3: Add Images
Place animal images in the `img/` directory and update the image references in the HTML.

### Step 4: Test the Page
Open the page in a browser to ensure all content displays correctly and navigation works.

## 🏛️ Creating a New Zoo Page

### Step 1: Copy the Template
```bash
cp templates/zoo-template.html [zoo-name]-zoo.html
```

### Step 2: Replace Placeholder Values

#### Basic Information
- `[ZOO_NAME]` → Zoo name (e.g., "David's Zoo")
- `[ZOO_DESCRIPTION]` → Welcome message
- `[ZOO_DETAILED_DESCRIPTION]` → Detailed zoo description
- `[ESTABLISHMENT_YEAR]` → Year zoo was established

#### Animal Cards (Repeat for each animal)
- `[ANIMAL_1-6_NAME]` → Animal names
- `[ANIMAL_1-6_DESCRIPTION]` → Animal descriptions
- `[ANIMAL_1-6_IMAGE]` → Animal image filenames
- `[ANIMAL_1-6_PAGE]` → Animal detail page filenames
- `[ANIMAL_1-6_LOCATION]` → Animal native locations
- `[ANIMAL_1-6_DIET]` → Animal diet types

### Step 3: Update Navigation
Add the new zoo to the main index page navigation.

## 🎨 Customization Guidelines

### Color Schemes
Choose colors that reflect the animal's natural habitat:
- **Forest Animals**: Greens (#2c5530, #4a7c59)
- **Mountain Animals**: Grays/Blues (#4a5568, #718096)
- **Desert Animals**: Browns/Oranges (#8b4513, #cd853f)
- **Arctic Animals**: Blues/Whites (#4682b4, #87ceeb)

### Pattern Shapes
Create SVG patterns that match the habitat:
- **Forest**: `<circle cx="10" cy="10" r="2" fill="rgba(255,255,255,0.1)"/>`
- **Mountains**: `<polygon points="0,25 12.5,10 25,25" fill="rgba(255,255,255,0.1)"/>`
- **Water**: `<rect x="5" y="5" width="15" height="15" fill="rgba(255,255,255,0.1)"/>`

### Content Guidelines
- **Scientific Accuracy**: All information should be factually correct
- **Educational Value**: Focus on learning and conservation
- **Engaging Tone**: Write in an accessible, engaging style
- **Conservation Focus**: Always include conservation information
- **Proper Citations**: Include authoritative sources

## 📝 Content Checklist

### Animal Page Checklist
- [ ] Hero section with compelling image and subtitle
- [ ] Comprehensive "About" section
- [ ] Detailed physical characteristics
- [ ] Habitat and distribution information
- [ ] Diet and behavior details
- [ ] Conservation status and challenges
- [ ] Conservation efforts
- [ ] Complete sidebar with facts and adaptations
- [ ] Statistics cards
- [ ] Image gallery with captions
- [ ] Proper citations with 8+ sources
- [ ] All placeholder values replaced

### Zoo Page Checklist
- [ ] Welcome section with zoo description
- [ ] 6 animal cards with images and descriptions
- [ ] About section with detailed information
- [ ] All placeholder values replaced
- [ ] Navigation updated in main index

## 🔧 Technical Notes

### File Structure
```
Zoo/
├── templates/
│   ├── animal-template.html
│   ├── zoo-template.html
│   └── README.md
├── css/
│   └── david-zoo.css (shared styles)
├── js/
│   └── navigation.js (shared functionality)
└── img/
    └── [animal images]
```

### CSS Classes
All templates use the standardized CSS classes from `david-zoo.css`:
- `.hero-section`, `.hero-title`, `.hero-subtitle`
- `.content-grid`, `.main-content`, `.sidebar`
- `.info-card`, `.info-list`
- `.section-title`, `.section-content`
- `.highlight-box`, `.conservation-stats`
- `.gallery`, `.gallery-item`
- `.citations-section`

### JavaScript Functions
Templates use the shared navigation functions:
- `goHome()` - Returns to main zoo selection
- `goBack()` - Returns to zoo main page
- `navigateToAnimal()` - Navigates to animal detail pages

## 🚀 Quick Start Example

To create a new Giant Panda page:

1. Copy template: `cp templates/animal-template.html david-giant-panda.html`
2. Replace `[ANIMAL_NAME]` with "Giant Panda"
3. Replace `[SCIENTIFIC_NAME]` with "Ailuropoda melanoleuca"
4. Replace `[HERO_IMAGE]` with "GiantPanda.png"
5. Fill in all content sections with panda-specific information
6. Add panda images to gallery
7. Include proper citations
8. Test the page

This template system ensures consistency, saves time, and maintains the high quality standards of the zoo website.
