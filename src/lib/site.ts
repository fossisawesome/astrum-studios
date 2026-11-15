// All editable site content lives here.

export interface TeamMember {
  name: string;
  role: string;
}

export const site = {
  studio: 'Astrum Studios',

  discord: {
    url: 'https://discord.gg/Yu2R3brutR',
    label: 'discord.gg/Yu2R3brutR',
  },

  // Paste the mod.io page URL here. While it is empty the site shows a
  // "link soon" placeholder instead of a dead button.
  modio: '',

  team: [
    { name: 'Kitty', role: 'Lead of Development' },
    { name: 'Coffee', role: 'Assistant Lead of Development' },
  ] satisfies TeamMember[],

  project: {
    slug: 'scp-security-breach',
    file: 'File 01',
    title: 'SCP: Security Breach',
    status: 'Early access',
    tagline: 'Containment has failed.',
    platform: 'Pavlov Shack / Meta Quest 2 + 3',
  },
};
