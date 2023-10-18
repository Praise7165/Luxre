

let projectList = [
    {
        name: "Modern Loft Design",
        description: "Experience the perfect blend of modern aesthetics and California charm with this stunning loft design. The open-concept layout maximizes natural light, while sleek finishes and minimalist furnishings create an inviting and sophisticated atmosphere. Enjoy the seamless integration of indoor and outdoor living spaces, with a private balcony offering panoramic views of the Los Angeles skyline. This project showcases our expertise in creating contemporary urban sanctuaries.			",
        coverImage: "https://drive.google.com/uc?export=view&id=1ibO-fnW3BV6Jq13CRUqQNqQ9rrFmQYT1",
        dateCompleted: "11 May 2019",
        location: "Los Angeles",
        type: "Space Planning",
        testimonial: "They've exceeded my expectations every times. Their attention to detail is unmatched. I highly recommend them. , Jane Doe"
    },
    {
        name: "Coastal Retreat",
        description: "Escape to a serene beachfront villa in the heart of Florida, where panoramic ocean views meet contemporary coastal design. This luxurious retreat combines comfortable and stylish furnishings with natural materials and a soothing color palette, evoking a sense of tranquility and relaxation. The seamless integration of indoor and outdoor spaces allows for effortless entertaining and enjoyment of the stunning coastal surroundings. This project reflects our passion for creating coastal havens that embody both elegance and laid-back sophistication.",
        coverImage: "https://drive.google.com/uc?export=view&id=1BTnpcHYkKsX371woven-HP9myDRgtNEp",
        dateCompleted: "04 August 2021",
        location: "Miami",
        type: "Home staging",
        testimonial: "This agency is top-notch. They truly care about their clients and go above and beyond to ensure their satisfaction. I would recommend them to anyone looking for exceptional design services.  Emily Brown",
    },
    {
        name: "Urban Oasis",
        description: "Discover an urban apartment oasis in the bustling city of New York, featuring a harmonious balance of style and greenery. This design incorporates natural elements such as living green walls, potted plants, and ample natural light to create a refreshing and revitalizing ambiance. The contemporary furnishings and smart space planning optimize functionality and maximize the use of available space. Escape the hectic city outside and immerse yourself in this peaceful and inviting retreat. Our expertise in urban oasis design is showcased in this project, bringing the beauty of nature into the heart of the concrete jungle.",
        coverImage: "https://drive.google.com/uc?export=view&id=1bmM-OpEemoON4WiMbJLpoiTVS7dQ0rPe",
        dateCompleted: "25 January 2023",
        location: "New york",
        type: "Renovation",
        testimonial: "I was blown away by the creativity and attention to detail that was put into my project. The end result was beyond my wildest dreams. Robert Lee",
    },
    {
        name: "Scandinavian Chic",
        description: "Immerse yourself in a minimalist wonderland inspired by Scandinavian design principles, nestled in the heart of Minnesota. This residential project embodies simplicity, clean lines, and functionality. Light wood tones, neutral color schemes, and natural textures create a warm and cozy atmosphere. Thoughtfully curated furniture and decor pieces, along with strategic lighting, enhance the overall sense of tranquility and harmony. This project showcases our ability to create spaces that celebrate the beauty of simplicity and Scandinavian design.",
        coverImage: "https://drive.google.com/uc?export=view&id=1C7TWZDNTluV5tDiFiZGfQnjLn9OQYpuj",
        dateCompleted: "18 March 2022",
        location: "Minneapolis",
        type: "Space Planning",
        testimonial: "The team at Luxre are amazing! They listened to my vision and created a space that is both beautiful and functional. I couldn't be happier with the end result. John Smith",
    },
    {
        name: "Industrial Vibes",
        description: "Experience the raw beauty of an industrial-inspired workspace transformation, where rustic elements meet modern sophistication. This project features exposed brick walls, reclaimed wood accents, and a blend of vintage and contemporary furnishings. The industrial lighting fixtures and metal finishes add a touch of edginess to the space. A harmonious combination of textures, materials, and carefully curated decor pieces create a unique and inspiring working environment. This project exemplifies our ability to bring together contrasting elements to create an industrial-chic aesthetic.",
        coverImage: "https://drive.google.com/uc?export=view&id=1MiSJCT8jSpNVmGrqxOeIFbpvwCRsWXf3",
        dateCompleted: "30 November 2021",
        location: "Austin",
        type: "Renovation",
        testimonial: "“They transformed my outdated living room into a modern and chic space that I absolutely love. They were professional and easy to work with throughout the entire process”, Sarah Johnson	"
    },
    {
        name: "Coastal Cottage",
        description: "Step into a charming coastal cottage in Oregon, where rustic elements blend seamlessly with coastal aesthetics. This project showcases the perfect balance between comfort and style. Soft hues, natural textures, and coastal-inspired decor create a relaxing and inviting atmosphere. The open floor plan and large windows provide breathtaking views of the surrounding natural beauty. Whether enjoying a cozy evening by the fireplace or embracing the coastal breeze on the porch, this cottage offers a true haven for coastal living. Our attention to detail and passion for coastal design shine through in this project.",
        coverImage: "https://drive.google.com/uc?export=view&id=1BY615NsFYdZ2HfBMz7243sL7dp52LqkR",
        dateCompleted: "12 June 2022",
        location: "Portland",
        type: "Home staging",
        testimonial: "I highly recommend studio Luxre for their exceptional creativity and attention to detail. They completely revamped my space and made it stunning. Thank you!, John Stevens",
    },
    {
        name: "Elegant Townhouse",
        description: "Embrace elegance and sophistication in this beautifully renovated townhouse located in historic Massachusetts. This project pays homage to the townhouse's historic charm while infusing modern design elements. High ceilings, intricate moldings, and refined finishes create a sense of grandeur and timeless beauty. The carefully selected furniture, artwork, and accessories enhance the overall aesthetic, combining traditional and contemporary elements. This townhouse is a testament to our ability to preserve architectural heritage while incorporating modern design sensibilities.",
        coverImage: "https://drive.google.com/uc?export=view&id=1OS1C_J7GE3nan36Z4T9GZTPAdjsrZPT7",
        dateCompleted: "01 September 2021",
        location: "Boston",
        type: "Renovation",
        testimonial: "I was so impressed with the work of Luxre Interior Design. They listened to my needs and created a space that was both beautiful and functional. I would highly recommend them to anyone looking for an interior designer. - Micheal Anderson",
    },
    {
        name: "Zen Retreat in Hawaii",
        description: "Discover a tranquil and Zen-inspired residential design that combines modern aesthetics with a touch of Hawaiian serenity. This project embraces minimalist principles, clean lines, and natural materials to create a calm and balanced living environment. The use of soothing colors, soft lighting, and nature-inspired decor elements fosters a sense of relaxation and inner peace. The integration of outdoor spaces, including a Japanese garden and a meditation area, provides a seamless connection to the surrounding natural beauty. Our expertise in Zen-inspired design shines through in this project, offering a haven of tranquility.",
        coverImage: "https://drive.google.com/uc?export=view&id=19Inf5TQJ3EFWZ0N6aR-def22ISHaeKDR",
        dateCompleted: "07 April 2018",
        location: "Honolulu",
        type: "Space Planning",
        testimonial: "I was hesitant to hire an interior designer, but I'm so glad I did. Luxre Interior Design made the process so easy and they created a space that I absolutely love. I would highly recommend them to anyone. - David Mark",
    },
    {
        name: "Modern Farmhouse",
        description: "Experience the perfect blend of modern luxury and rustic charm in this breathtaking modern farmhouse nestled in the scenic beauty of Colorado. This project showcases a harmonious fusion of clean lines, natural materials, and warm textures. The spacious layout, open-concept living areas, and expansive windows create a seamless connection with the surrounding landscape. The farmhouse-inspired decor, cozy furnishings, and statement lighting fixtures enhance the overall cozy and welcoming atmosphere. This project reflects our commitment to creating homes that embrace the beauty of both modern design and rustic elements.",
        coverImage: "https://drive.google.com/uc?export=view&id=1pO5VkkqdGwmMkcvTDO-vkMQZkzTICPJS",
        dateCompleted: "02 October 2022",
        location: "Denver",
        type: "Renovation",
        testimonial: "I had a very specific vision for my new home, and Luxre Interior Design was able to bring it to life. They were so creative and thoughtful, and they made sure that every detail was perfect. I would definitely recommend them to anyone. - Lisa Diouf",
    },
    {
        name: "Luxury Penthouse",
        description: "Indulge in the epitome of luxury living with this breathtaking penthouse boasting unrivaled city views in Las Vegas. This project showcases exquisite attention to detail, refined materials, and opulent finishes. The open layout, floor-to-ceiling windows, and tastefully selected furnishings create a sense of grandeur and sophistication. From the stunning chandeliers to the custom-designed features, every element exudes luxury and exclusivity. The penthouse offers the perfect combination of lavishness and contemporary design, making it a standout residence in the vibrant cityscape.",
        coverImage: "https://drive.google.com/uc?export=view&id=1A2bT_4kNYqf7mrdUX_vWKL4MlJX6JvKr",
        dateCompleted: "09 May 2023",
        location: "Las Vegas",
        type: "Space Planning",
        testimonial: "I had a very tight budget for my home renovation, but Luxre Interior Design was able to create a space that was both beautiful and affordable. I'm so happy with the results and I would definitely recommend them to anyone. - Emmanuel Knosciski",
    },
    {
        name: "Rustic Elegance",
        description: "Immerse yourself in rustic elegance with this mountain cabin retreat, offering a cozy escape surrounded by the natural beauty of Montana. The warm and inviting interior features exposed wooden beams, stone accents, and a blend of traditional and modern furnishings. The cozy fireplace and large windows framing picturesque mountain views create a perfect ambiance for relaxation. The integration of nature-inspired elements and carefully chosen decor pieces brings a sense of harmony and comfort to the space. This project exemplifies our ability to create rustic retreats that combine elegance with the charm of the great outdoors.",
        coverImage: "https://drive.google.com/uc?export=view&id=1iklzKLmsyhYrsW7ex0YAIz9vYC7zoTg7",
        dateCompleted: "30 July 2021",
        location: "Montana",
        type: "Home staging",
        testimonial: "Working with Luxre was a seamless and enjoyable experience. They listened to my ideas and translated them into a stunning design concept. I couldn't be happier with the result! - Emma Roberts",
    },
    {
        name: "Urban Revitalization",
        description: "Witness the transformation of an urban neighborhood in Chicago, where modern flair meets revitalization. This project involves redesigning public spaces, such as parks and plazas, to create vibrant and functional community areas. Incorporating contemporary design elements, sustainable features, and interactive installations, this revitalization project breathes new life into the urban fabric. The result is a welcoming and engaging environment that fosters community interaction and promotes a sense of pride. This project reflects our commitment to urban revitalization and our vision for vibrant and livable cities.",
        coverImage: "https://drive.google.com/uc?export=view&id=1q8byNiZ1p1qKSEItRooGZKM9mStdLZBh",
        dateCompleted: "29 December 2020",
        location: "Chicago",
        type: "Renovation",
        testimonial: "I can't thank studio luxre enough for their expertise in transforming my outdated bathroom into a luxurious retreat. The team's professionalism and dedication to quality are truly commendable. - David Wilson",
    },
];



// Properly estimate the date which the project was completed.
projectList.forEach((project) => {
    return project.dateCompleted = new Date(project.dateCompleted);
});



// Sort the projects by date completed.
projectList.sort((a, b) => {
    return b.dateCompleted - a.dateCompleted;
});







let team = [
    {
        name: "Rebecca Teden",
        role: "Founder and creative director",
        image: "./Assets/Team/1x/President.jpg",
        Bio: "Rebecca Teden is the founder of Luxre Interior Design with over 20 years of experience in the interior design industry. Rebecca is a graduate of the Fashion Institute of Technology, she holds a degree in interior design and she is also a certified interior designer by the National Council for Interior Design Qualification (NCIDQ). Rebecca is a member of the American Society of Interior Designers (ASID), and she is a frequent speaker at industry events. Rebecca is known for her keen eye for detail, her passion for creating beautiful spaces.",
        Projects: [projectList[0], projectList[1], projectList[2]]
    },
    {
        name: "Samantha Henning",
        role: "Senior designer",
        image: "./Assets/Team/1x/Henning.jpg",
        Bio: "Samantha Henning is an accomplished senior designer at Luxre with over a decade of experience. Her remarkable talent and attention to detail have earned her recognition in prestigious publications like Architectural Digest, Elle Decor, and House Beautiful. Samantha is the recipient of the 2019 ASID Award for Best Residential Design and the 2020 NCIDQ Award for Excellence in Interior Design. With a passion for creating personalized spaces that harmonize functionality and aesthetics, Samantha continues to inspire clients and elevate the Luxre portfolio.",
        Projects: [projectList[0], projectList[1], projectList[2]]
    },
    {
        name: "Khasan Xerxes",
        role: "Senior designer",
        image: "./Assets/Team/1x/Khosan.jpg",
        Bio: "Khosan Xerxes is a senior designer at Luxre, renowned for his exceptional creativity, attention to detail, and commitment to delivering extraordinary design experiences. With a wealth of experience in the industry, Khosan brings a unique perspective to his work, blending artistic vision with functional design solutions. His ability to connect with clients and translate their visions into stunning realities has earned him a reputation as a sought-after designer.",
        Projects: [projectList[0], projectList[1], projectList[2]]
    },
    {
        name: "Callie Machalat",
        role: "Junior designer",
        image: "./Assets/Team/1x/Callie.jpg",
        Bio: "Callie Machalat is a junior designer at Luxre Interior Design, where she has worked for the past year. She is passionate about creating beautiful and functional spaces that reflect the unique personality and needs of her clients. Callie is a talented designer who is always eager to learn and grow. She is also a great team player and is always willing to help out her colleagues.",
        Projects: [projectList[0], projectList[1], projectList[2]]
    },
    {
        name: "Seun Olorunfemi",
        role: "Interior Stylist",
        image: "./Assets/Team/1x/Seun.jpg",
        Bio: "Seun Olorunfemi is the interior stylist at Luxre, adding the finishing touches and impeccable styling to each project. With a background in fashion and a keen eye for trends, Seun brings a unique perspective to the team. From selecting the perfect accessories to curating art collections, he ensures that each space is personalized and reflects the client's personality and lifestyle.",
        Projects: [projectList[0], projectList[1], projectList[2]]
    },
    {
        name: "Thomas McCornick",
        role: "Project Manager",
        image: "./Assets/Team/1x/Thomas.jpg",
        Bio: "Thomas McCornick is the project manager at Luxre, overseeing the smooth execution of every design project. With his exceptional organizational skills and attention to deadlines, Thomas ensures that each client's vision is brought to life seamlessly. He collaborates closely with both the design team and the clients, ensuring effective communication and a streamlined workflow from start to finish.",
        Projects: [projectList[0], projectList[1], projectList[2]]
    }
];




