# Template Quick Reference Guide

## 🐾 Animal Page Template - Quick Setup

### Essential Replacements
```html
[ANIMAL_NAME] → "Giant Panda"
[ZOO_NAME] → "David's Zoo"
[SCIENTIFIC_NAME] → "Ailuropoda melanoleuca"
[HERO_IMAGE] → "GiantPanda.png"
[PRIMARY_COLOR] → "#2c5530"
[SECONDARY_COLOR] → "#4a7c59"
```

### Content Sections to Fill
1. **Hero Section**: Title, subtitle, main image
2. **About**: Introduction and detailed description
3. **Physical Characteristics**: Size, features, adaptations
4. **Habitat & Distribution**: Locations and environment
5. **Diet & Behavior**: Food sources and behavior patterns
6. **Conservation**: Status, challenges, efforts
7. **Sidebar**: Quick facts, adaptations, statistics
8. **Gallery**: 4 images with captions
9. **Citations**: 8+ authoritative sources

## 🏛️ Zoo Page Template - Quick Setup

### Essential Replacements
```html
[ZOO_NAME] → "David's Zoo"
[ZOO_DESCRIPTION] → "Welcome message"
[ESTABLISHMENT_YEAR] → "2025"
```

### Animal Cards (6 animals)
For each animal card, replace:
- `[ANIMAL_X_NAME]` → Animal name
- `[ANIMAL_X_DESCRIPTION]` → Brief description
- `[ANIMAL_X_IMAGE]` → Image filename
- `[ANIMAL_X_PAGE]` → Detail page filename
- `[ANIMAL_X_LOCATION]` → Native location
- `[ANIMAL_X_DIET]` → Diet type

## Color Schemes by Habitat

### Forest Animals
```css
[PRIMARY_COLOR] → "#2c5530"
[SECONDARY_COLOR] → "#4a7c59"
[PATTERN_SHAPE] → '<circle cx="10" cy="10" r="2" fill="rgba(255,255,255,0.1)"/>'
```

### Mountain Animals
```css
[PRIMARY_COLOR] → "#4a5568"
[SECONDARY_COLOR] → "#718096"
[PATTERN_SHAPE] → '<polygon points="0,25 12.5,10 25,25" fill="rgba(255,255,255,0.1)"/>'
```

### Desert Animals
```css
[PRIMARY_COLOR] → "#8b4513"
[SECONDARY_COLOR] → "#cd853f"
[PATTERN_SHAPE] → '<rect x="5" y="5" width="15" height="15" fill="rgba(255,255,255,0.1)"/>'
```

### Arctic Animals
```css
[PRIMARY_COLOR] → "#4682b4"
[SECONDARY_COLOR] → "#87ceeb"
[PATTERN_SHAPE] → '<circle cx="10" cy="10" r="3" fill="rgba(255,255,255,0.2)"/>'
```

## 📋 Content Checklist

### Animal Page
- [ ] Hero image and title
- [ ] 4 content sections filled
- [ ] Sidebar facts complete
- [ ] 4 gallery images
- [ ] 8+ citations
- [ ] All placeholders replaced

### Zoo Page
- [ ] Welcome message
- [ ] 6 animal cards
- [ ] About section
- [ ] All placeholders replaced

## 🔗 File Structure
```
templates/
├── animal-template.html
├── zoo-template.html
├── README.md
└── QUICK_REFERENCE.md
```

## ⚡ Quick Commands
```bash
# Create new animal page
cp templates/animal-template.html david-[animal].html

# Create new zoo page
cp templates/zoo-template.html [name]-zoo.html
```
