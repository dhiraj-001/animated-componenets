# Animated UI Components

A collection of animated UI components for Next.js projects.

## Components

### CircularGallery

Located at `src/ui/circulargallery.tsx`

Import and use:
```tsx
import CircularGallery from '@/ui/circulargallery';

export default function Page() {
  return (
    <div style={{ height: '700px', position: 'relative' }}>
      <CircularGallery
        bend={3}
        textColor="#00ffff"
        borderRadius={0.05}
        scrollEase={0.02}
      />
    </div>
  );
}
```

Props: `items`, `bend`, `textColor`, `borderRadius`, `font`, `scrollSpeed`, `scrollEase`

### LightRays

Located at `src/ui/lightraysBG.tsx`

Import and use:
```tsx
import LightRays from '@/ui/lightraysBG';

export default function Page() {
  return (
    <div className="relative w-full h-screen">
      <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        followMouse={true}
      />
    </div>
  );
}
```

Props: `raysOrigin`, `raysColor`, `raysSpeed`, `lightSpread`, `rayLength`, `pulsating`, `fadeDistance`, `saturation`, `followMouse`, `mouseInfluence`, `noiseAmount`, `distortion`, `className`

### Navbar

Located at `src/ui/navbar.tsx`

Import and use:
```tsx
import Navbar from '@/ui/navbar';

const items = [
  {
    label: "About",
    bgColor: "rgba(13, 7, 22, 0.8)",
    textColor: "#fff",
    links: [
      { label: "Company", href: "#", ariaLabel: "About Company" }
    ]
  }
];

export default function Page() {
  return (
    <Navbar
      logo="/icon.png"
      logoAlt="Company Logo"
      items={items}
      baseColor="rgba(0, 0, 0, 0.3)"
      menuColor="#fff"
    />
  );
}
```

Props: `logo`, `logoAlt`, `items`, `className`, `ease`, `baseColor`, `menuColor`, `buttonBgColor`, `buttonTextColor`

## Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view.
