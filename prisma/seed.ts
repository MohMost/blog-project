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
        title: "First Blog Post",
        desc: "This is the description for the first blog post.",
        img: "https://api.dicebear.com/9.x/big-smile/svg",
        category: "Technology",
        userEmail: user1.email!,
        featured: true,
        topPost: false,
      },
      {
        title: "Second Blog Post",
        desc: "This is the description for the second blog post.",
        img: "https://api.dicebear.com/9.x/big-smile/svg",
        category: "Health",
        userEmail: user2.email!,
        featured: false,
        topPost: true,
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
