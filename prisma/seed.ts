import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Sample data
const data = [
  {
    date: '2023-324',
    programId: '65568af2300198d455bc367c',
    blocks: {
      create: [
        {
          title: 'CORE',
          duration: 'TABATA 20" ON 10" OFF',
          categoryId: '65568a6958d24eac142fb9c7',
          description: '8 rounds:\n- Weighted Planks (BW)',
        },
        {
          title: 'UPPER BODY',
          duration: 'TO FINISH',
          categoryId: '65568a6958d24eac142fb9c7',
          description:
            '4 rounds:\n- 10 Barbell Bent Over Row (100/55)\n- 10 Good Morning (70/35)\n- 10 Barbell Curl and Shoulder Press (40/20)\n- 10 RDL (100/55)',
        },
        {
          title: 'B1',
          duration: 'TO FINISH',
          categoryId: '65568a24300198d455bc367b',
          description:
            'Hang Muscle Snatch + Push Press (Sn.) + OHS\n- 4x6@35-45\n- 4x6@46-60\n',
        },
        {
          title: 'B2',
          duration: 'TO FINISH',
          categoryId: '65568a24300198d455bc367b',
          description:
            'Hang Power Snatch + Push Press (Sn.) + OHS + Snatch Balance\n- 2x4@35-45\n- 2x4@46-60\n- 3x4@61-70',
        },
        {
          title: 'B3',
          duration: 'TO FINISH',
          categoryId: '65568a24300198d455bc367b',
          description: 'Push Press + Push Jerk\n- 4x3@50-60\n- 4x3@61-69',
        },
        {
          title: 'B4',
          duration: 'TO FINISH',
          categoryId: '65568a24300198d455bc367b',
          description:
            'Shoulder Strict Press (% del Jerk)\n- 4x6@40-48\n- 4x6@49-59',
        },
      ],
    },
  },
  {
    date: '2023-326',
    programId: '65568af2300198d455bc367c',
    blocks: {
      create: [
        {
          categoryId: '65568a6958d24eac142fb9c7',
          description:
            '8 rounds:\n- #1 15” (each side)\n- #2 30” (each side)\n- #3 12 reps Each Side\n\nhttps://youtube.com/shorts/C89EKtI8a3o',
          duration: 'TO FINISH',
          title: 'MCGILL BIG3',
        },
        {
          categoryId: '65568a6958d24eac142fb9c7',
          description:
            '4 rounds x 12reps each \n**cambiar la 🎾 por la SlamBall de 5kg\n\nhttps://www.instagram.com/p/CxicGOGoHes',
          duration: 'TO FINISH',
          title: 'SLAM LLABB',
        },
        {
          categoryId: '65568a24300198d455bc367b',
          description:
            'Back Squat (% del Front)\n- 1x5@70-81\n- 2x4@82-88\n- 3x4@89-100\n- 4x4@101-108\n',
          duration: 'TO FINISH',
          title: 'B1',
        },
        {
          categoryId: '65568a24300198d455bc367b',
          description:
            'Power Clean (Blocks - Rodillas)\n- 1x4@35-45\n- 2x4@46-59\n- 1x3@60-72\n',
          duration: 'TO FINISH',
          title: 'B2',
        },
        {
          categoryId: '65568a24300198d455bc367b',
          description:
            'Back Rack Split Jerk + Split Jerk\n- 2x6@46-59\n- 2x5@60-72\n- 2x5@72-82',
          duration: 'TO FINISH',
          title: 'B3',
        },
        {
          categoryId: '65568a24300198d455bc367b',
          description:
            'Clean DL (deficit)\n- 2x5@60-71\n- 2x5@72-82\n- 2x4@83-89\n- 4x4@90-102',
          duration: 'TO FINISH',
          title: 'B3',
        },
      ],
    },
  },
];

async function main() {
  await prisma.$transaction(
    data.map((w) =>
      prisma.workout.create({
        data: w,
      }),
    ),
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
