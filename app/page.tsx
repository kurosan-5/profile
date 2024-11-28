'use client'
import { Grid2, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  const message = "Weelcome";
  const [welcome, setWelcome] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setWelcome((prev) => prev + message[currentIndex]);
      currentIndex++;

      if (currentIndex >= message.length - 1) {
        clearInterval(interval);
      }
    }, 800); // 0.5秒ごとに次の文字を追加

    return () => clearInterval(interval); // クリーンアップ
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Grid2
        container
        direction='column'
      >
        <Grid2
          sx={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Playfair Display', serif",
          }}
        >
          <Typography
            variant='h3'
            component='h3'
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '4rem'
            }}
          >
            {welcome}
          </Typography>
        </Grid2>


        {/* ここから名前のところ */}
        <Grid2
          sx={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

          }}
        >
          <Image
            src='/profile.jpg'
            alt='profile image'
            width={300}
            height={300}
            style={{
              borderRadius: 20,
              marginRight: "10%",

            }}
          />
          <Grid2
            container
            direction='column'
            rowSpacing={1}
          >
            <Grid2
              container
              direction='row'
            >
              <Grid2>
                <Typography
                  variant='h4'
                  component='h4'
                  sx={{
                    fontFamily: 'var(--font-geist-mono)',
                  }}
                >
                  金森大直
                </Typography>
              </Grid2>
              <Grid2>
                <Typography
                  variant='body1'
                  component='p'
                  sx={{
                    marginLeft: 3,
                    marginTop: 2,
                    color: "text.secondary"
                  }}
                >
                  Kanamori Hirosugu
                </Typography>
              </Grid2>
            </Grid2>
            <Grid2>
              <Typography
                variant='h5'
                component='h5'
              >
                大阪大学基礎工学部化学応用科学科
              </Typography>
            </Grid2>
            <Grid2>
              <Typography
                variant='body1'
                component='p'
              >
                志望 - Webアプリエンジニア
              </Typography>
            </Grid2>
            <Grid2>
              <Typography
                variant='body1'
                component='p'
              >
                趣味 - 旅行・サイクリング
              </Typography>
            </Grid2>
            <Grid2>
              <Typography
                variant='body1'
                component='p'
              >
                好きな食べ物 - お寿司・焼きとり
              </Typography>
            </Grid2>
          </Grid2>
        </Grid2>



        {/* ここから技術スタック */}
        <Grid2
          sx={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Grid2
            container
            direction='column'
            rowSpacing={1}
          >
            <Grid2>
              <Typography
                variant='h5'
                component='h5'
              >
                開発経験のある言語・ツール
              </Typography>
            </Grid2>
            <Grid2>
              <Typography
                variant="body1"
                component='p'
              >
                フレームワーク - Next.js・Laravel
              </Typography>
            </Grid2>
            <Grid2>
              <Typography
                variant="body1"
                component='p'
              >
                フロントエンド - React・Vue.js・Typescript
              </Typography>
            </Grid2>
            <Grid2>
              <Typography
                variant="body1"
                component='p'
              >
                バックエンド - Node.js + Express, Python
              </Typography>
            </Grid2>
            <Grid2>
              <Typography
                variant="body1"
                component='p'
              >
                データベース - MySQL・PostgreSQL・NoSQL
              </Typography>
            </Grid2>
            <Grid2>
              <Typography
                variant="body1"
                component='p'
              >
                バージョン管理 - GitHub
              </Typography>
            </Grid2>
          </Grid2>

        </Grid2>



      </Grid2>

    </>

  );
}
