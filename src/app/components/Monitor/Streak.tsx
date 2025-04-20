"use client"

import { motion } from "framer-motion"
import { Calendar, CheckCircle, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect } from "react"

export default function Streak() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="posting-streak" className="py-20 bg-white/90 dark:bg-black">
      <div className=" px-4 mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Never Miss a Post Again
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Track your posting and never go behind your schedule
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="border-none bg-transparent dark:border-gray-800 shadow-md h-full">
              <CardHeader>
                <CardTitle className="text-xl">Maintain Your Momentum</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Build a consistent posting habit that grows your audience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                    Regular, steady posting outperforms occasional viral hits. Postrack helps you maintain the 
                    consistency that algorithms reward and audiences expect.
                  </p>
                
                <div id="tweet-embed" className="mt-6">
                <blockquote className="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Consistency beats intensity; keep showing up.</p>&mdash; Bookism (@1Bookism) <a href="https://twitter.com/1Bookism/status/1847576171656904990?ref_src=twsrc%5Etfw">October 19, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                </div>
               
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/streak.png"
                alt="Posting streak tracker"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
