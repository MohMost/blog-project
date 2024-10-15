import prisma from "../lib/prismadb";

const main = async () => {
  // Create users
  const user1 = await prisma.user.create({
    data: {
      name: "Alice Smith",
      email: "alice@example.com",
      emailVerified: new Date(),
      image: "/92.png",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "Bob Johnson",
      email: "bob@example.com",
      emailVerified: new Date(),
      image: "https://api.dicebear.com/9.x/big-smile/svg",
    },
  });

  // Create accounts for the users
  await prisma.account.createMany({
    data: [
      {
        userId: user1.id,
        type: "oauth",
        provider: "google",
        providerAccountId: "google-id-1",
        refresh_token: "refresh-token-1",
        access_token: "access-token-1",
        expires_at: 3600,
        token_type: "Bearer",
        scope: "email profile",
        id_token: "id-token-1",
        session_state: "active",
      },
      {
        userId: user2.id,
        type: "oauth",
        provider: "github",
        providerAccountId: "github-id-1",
        refresh_token: "refresh-token-2",
        access_token: "access-token-2",
        expires_at: 3600,
        token_type: "Bearer",
        scope: "repo user",
        id_token: "id-token-2",
        session_state: "active",
      },
    ],
  });

  // Create sessions for the users
  await prisma.session.createMany({
    data: [
      {
        sessionToken: "session-token-1",
        userId: user1.id,
        expires: new Date(Date.now() + 3600 * 1000), // 1 hour expiry
      },
      {
        sessionToken: "session-token-2",
        userId: user2.id,
        expires: new Date(Date.now() + 3600 * 1000), // 1 hour expiry
      },
    ],
  });

  // Create verification tokens
  await prisma.verificationToken.createMany({
    data: [
      {
        identifier: user1.email!,
        token: "verification-token-1",
        expires: new Date(Date.now() + 3600 * 1000), // 1 hour expiry
      },
      {
        identifier: user2.email!,
        token: "verification-token-2",
        expires: new Date(Date.now() + 3600 * 1000), // 1 hour expiry
      },
    ],
  });

  // Create blog posts
  await prisma.blog.createMany({
    data: [
      {
        title: "Exploring the Great Outdoors",
        desc: "Join us as we venture into the wild and discover the beauty of nature.",
        img: "https://picsum.photos/1920/1080",
        category: "Adventure",
        userEmail: user1.email!,
        featured: true,
        topPost: false,
      },
      {
        title: "Wanderlust: A Journey of Self-Discovery",
        desc: "Traveling the world can help you discover more about yourself.",
        img: "https://picsum.photos/1920/1080",
        category: "Wanderlust",
        userEmail: user2.email!,
        featured: false,
        topPost: true,
      },
      {
        title: "The Rich Culture of Japan",
        desc: "Explore the fascinating traditions and culture of Japan.",
        img: "https://picsum.photos/1920/1080",
        category: "Culture",
        userEmail: user1.email!,
        featured: true,
        topPost: false,
      },
      {
        title: "Discovering Ancient Ruins",
        desc: "A guide to some of the most breathtaking ancient ruins around the world.",
        img: "https://picsum.photos/1920/1080",
        category: "Discovery",
        userEmail: user2.email!,
        featured: false,
        topPost: false,
      },
      {
        title: "Journeys Through the Amazon Rainforest",
        desc: "An adventure into the heart of the Amazon rainforest.",
        img: "https://picsum.photos/1920/1080",
        category: "Journeys",
        userEmail: user1.email!,
        featured: true,
        topPost: false,
      },
      {
        title: "A Culture of Coffee in Colombia",
        desc: "Explore the unique coffee culture in Colombia.",
        img: "https://picsum.photos/1920/1080",
        category: "Culture",
        userEmail: user2.email!,
        featured: false,
        topPost: true,
      },
      {
        title: "The Thrill of Adventure Sports",
        desc: "From bungee jumping to white-water rafting, adventure sports await!",
        img: "https://picsum.photos/1920/1080",
        category: "Adventure",
        userEmail: user1.email!,
        featured: false,
        topPost: false,
      },
      {
        title: "Wanderlust: Discovering Hidden Gems",
        desc: "Travel off the beaten path and find hidden gems around the world.",
        img: "https://picsum.photos/1920/1080",
        category: "Wanderlust",
        userEmail: user2.email!,
        featured: true,
        topPost: false,
      },
      {
        title: "Cultural Festivals Around the World",
        desc: "Experience the vibrant cultural festivals across the globe.",
        img: "https://picsum.photos/1920/1080",
        category: "Culture",
        userEmail: user1.email!,
        featured: false,
        topPost: true,
      },
      {
        title: "Exploring the Wonders of the World",
        desc: "Join us on a journey to explore the wonders of the world.",
        img: "https://picsum.photos/1920/1080",
        category: "Discovery",
        userEmail: user2.email!,
        featured: false,
        topPost: false,
      },
      {
        title: "Epic Road Trips to Take",
        desc: "A guide to some of the most scenic road trips you can take.",
        img: "https://picsum.photos/1920/1080",
        category: "Journeys",
        userEmail: user1.email!,
        featured: true,
        topPost: false,
      },
      {
        title: "The Beauty of the Northern Lights",
        desc: "A breathtaking display of nature’s beauty: the Northern Lights.",
        img: "https://picsum.photos/1920/1080",
        category: "Adventure",
        userEmail: user2.email!,
        featured: false,
        topPost: true,
      },
      {
        title: "Cultural Influences in Modern Art",
        desc: "How various cultures have influenced modern art movements.",
        img: "https://picsum.photos/1920/1080",
        category: "Culture",
        userEmail: user1.email!,
        featured: false,
        topPost: false,
      },
      {
        title: "Discovering Hidden Waterfalls",
        desc: "Join us on a journey to discover breathtaking hidden waterfalls.",
        img: "https://picsum.photos/1920/1080",
        category: "Discovery",
        userEmail: user2.email!,
        featured: true,
        topPost: false,
      },
      {
        title: "The Ultimate Travel Bucket List",
        desc: "Create your ultimate travel bucket list and make it happen.",
        img: "https://picsum.photos/1920/1080",
        category: "Wanderlust",
        userEmail: user1.email!,
        featured: false,
        topPost: true,
      },
      {
        title: "Journeys Through the Historic Silk Road",
        desc: "Explore the rich history along the Silk Road.",
        img: "https://picsum.photos/1920/1080",
        category: "Journeys",
        userEmail: user2.email!,
        featured: false,
        topPost: false,
      },
      {
        title: "The Best Hiking Trails in the World",
        desc: "A guide to some of the best hiking trails you must explore.",
        img: "https://picsum.photos/1920/1080",
        category: "Adventure",
        userEmail: user1.email!,
        featured: true,
        topPost: false,
      },
      {
        title: "Cultural Insights: Traveling Responsibly",
        desc: "Learn how to travel responsibly and respect local cultures.",
        img: "https://picsum.photos/1920/1080",
        category: "Culture",
        userEmail: user2.email!,
        featured: false,
        topPost: true,
      },
      {
        title: "Rediscovering Lost Cities",
        desc: "Explore the lost cities and their historical significance.",
        img: "https://picsum.photos/1920/1080",
        category: "Discovery",
        userEmail: user1.email!,
        featured: false,
        topPost: false,
      },
    ],
  });

  console.log("Seeding completed.");
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
