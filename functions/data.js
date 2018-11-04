var fullName = 'Vinoth Kumar';
var nickName = 'vnoitkumar';
var email = 'vnoitkumar@gmail.com';
var mobile = '+917708521528';
var cityName = 'Chennai';
var stateName = 'Tamil Nadu';
var countryName = 'India';
var cityLatitude = '13.0827';
var cityLongitude = '80.2707';
var url = 'https://vnoit.com/';
var title = 'Vinoth Kumar | Developer';
var description = 'Proficient in PHP, Laravel, AWS, GCP, Docker and have experience working in Node Js and Angular.';
var keywords = 'vnoitkumar, #vnoitkumar, @vnoitkumar, developer, laravel, nodejs, php'
var h1 = 'Vinoth Kumar\'s Portfolio - #vnoitkumar';

var socialProfiles = [
    {
        name: 'LinkedIn',
        font_awesome_icon: 'fab fa-linkedin-in',
        link: 'https://www.linkedin.com/in/vnoitkumar/'
    },
    {
        name: 'Github',
        font_awesome_icon: 'fab fa-github',
        link: 'https://github.com/vnoitkumar/'
    },
    {
        name: 'Facebook',
        font_awesome_icon: 'fab fa-facebook-f',
        link: 'https://www.facebook.com/VnoitKumar/'
    }
];

var workExperiences = [
    {
        from: {
            day: '',
            month: 'July',
            year: '2018',
        },
        to: {
            day: '',
            month: '',
            year: '',
        },
        company: 'FinMomenta Pvt. Ltd.',
        designation: 'Senior Software Engineer',
        location: 'Chennai, India',
        currently_working_here: 1
    },
    {
        from: {
            day: '',
            month: 'October',
            year: '2016',
        },
        to: {
            day: '',
            month: 'June',
            year: '2018',
        },
        company: 'SP Robotic Works Pvt. Ltd.',
        designation: 'Senior Software Engineer',
        location: 'Chennai, India',
        currently_working_here: 0
    },
    {
        from: {
            day: '',
            month: 'April',
            year: '2016',
        },
        to: {
            day: '',
            month: 'September',
            year: '2016',
        },
        company: 'SP Robotic Works Pvt. Ltd.',
        designation: 'Web Developer',
        location: 'Chennai, India',
        currently_working_here: 0
    },
    {
        from: {
            day: '',
            month: 'February',
            year: '2016',
        },
        to: {
            day: '',
            month: 'March',
            year: '2016',
        },
        company: 'SP Robotic Works Pvt. Ltd.',
        designation: 'Intern',
        location: 'Chennai, India',
        currently_working_here: 0
    },
];

var educationalQualifications = [
    {
        from: {
            day: '',
            month: '',
            year: '2012',
        },
        to: {
            day: '',
            month: '',
            year: '2016',
        },
        institution: 'AARUPADAI VEEDU INSTITUTE OF TECHNOLOGY',
        course: 'Bachelor of Computer Science and Engineering',
        location: 'Chennai, India',
        currently_studying_here: 0
    },
    {
        from: {
            day: '',
            month: '',
            year: '',
        },
        to: {
            day: '',
            month: '',
            year: '2012',
        },
        institution: 'ST. PIUS X MATRIC. HR. SEC. SCHOOL',
        course: 'Higher Secondary Certificate ( HSC )',
        location: 'Chennai, India',
        currently_studying_here: 0
    },
    {
        from: {
            day: '',
            month: '',
            year: '',
        },
        to: {
            day: '',
            month: '',
            year: '2010',
        },
        institution: 'ST. FRANCIS DE SALES MATRIC. HR. SEC. SCHOOL',
        course: 'Secondary School Leaving Certificate ( SSLC )',
        location: 'Alangayam, Vellore, India',
        currently_studying_here: 0
    },
];

var metaTagDetails = {
    title: title,
    subject: 'Vinoth Kumar\'s Portfolio - #vnoitkumar',
    revised: 'Friday, November 2nd, 2018, 10:00 pm',
    keywords: keywords,
    reply_to: email,
    url: url,
    owner: fullName,
    geo: {
        placename: countryName,
        position: cityLatitude + '; ' + cityLongitude
    },
    open_graph: {
        type: 'website',
        url: url,
        site_name: 'Vnoit.com',
        email: email,
        phone_number: mobile,
        latitude: cityLatitude,
        longitude: cityLongitude,
        locality: cityName,
    },
    profile: {
        first_name: fullName,
        username: nickName,
        gender: 'male',
    },
    social_share: {
        fb: {
            image: 'https://vnoit.com/images/social/facebook-link-post.jpg',
            image_width: '1200',
            image_height: '628',
            image_type: 'image/jpg'
        },
        twitter: {
            site: '@vnoitkumar',
            creator: '@vnoitkumar',
            image: 'https://vnoit.com/images/social/twitter.jpg',
            image_width: '1200',
            image_height: '628',
        }
    },
};

var analyticsDetails = {
    fb: {
        app_id: '1166396203529747',
        api_version: 'v3.2',
    },
};

var jsonData = {
    title: title,
    description: description,
    h1: h1,
    name: fullName,
    job_profile: 'Senior Software Engineer',
    mobile: mobile,
    mobile_label: '+91-77085 21528',
    email: email,
    current_location: cityName + ', ' + countryName,
    hashtag: '#vnoitkumar',
    avatar_image: '/images/vnoitkumar-avatar.png',
    resume_download_link: 'https://docs.google.com/document/d/1rpThwC9VaUAKjSQbxeWsBAEhgAZXv1y533Pzn4QA6Jo/export?format=pdf',
    meta_tag_details: metaTagDetails,
    url: url,
    styles: {
        theme_color: '#2d2e2e',
    },
    analytics_details: analyticsDetails,
    social_profiles: socialProfiles,
    work_experiences: workExperiences,
    educational_qualifications: educationalQualifications
};

exports.jsonData = function () {
    return jsonData;
}
