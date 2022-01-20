// You can add your instances here using Pull Request on Github

var instances = [
    {name: 'lor.sh', url: 'https://lor.sh', platform: 'mastodon', registration: 'premoderated'},
    {name: 'mastodon.ml', url: 'https://mastodon.ml', platform: 'mastodon', registration: 'open'},
    {name: 'Expired Mentality', url: 'https://expired.mentality.rip', platform: 'pleroma', registration: 'open'},
    {name: 'Клуб "Свобода"', url: 'https://soc.phreedom.club', platform: 'pleroma', registration: 'open'},
    {name: 'zHub.link', url: 'https://zhub.link', platform: 'mastodon', registration: 'open'},
];

var platforms = {
    mastodon: {name: 'Mastodon', icon: 'images/mastodon-32px.png'},
    pleroma: {name: 'Pleroma', icon: 'images/pleroma-32px.png'},
    friendica: {name: 'Friendica', icon: 'images/friendica-32px.png'},
    //misskey: {name: 'Misskey', icon: 'images/misskey.png'},
};

var registrationModes = {
    open: {name: 'Открытая', description: 'Свободная регистрация'},
    premoderated: {name: 'Премодерируемая', description: 'После регистрации необходимо дождаться проверки модератора'},
};
