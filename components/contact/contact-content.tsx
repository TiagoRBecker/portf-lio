"use client"

import React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const contactLinks = [
  {
    label: "Email",
    
    href: "mailto:tiago.becker.contato@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
   
    href: "https://github.com/TiagoRBecker",
    icon: Github,
  },
  {
    label: "LinkedIn",
  
    href: "https://www.linkedin.com/in/tiago-becker-2151473b3/",
    icon: Linkedin,
  },
]

export function ContactContent() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Aqui você conectaria com seu serviço de email (Nodemailer, SendGrid, etc)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Entre em Contato
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Interessado em trabalhar junto ou tem alguma dúvida? Sinta-se à vontade 
          para entrar em contato através de qualquer um dos canais abaixo.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        {/* Formulário de Contato */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-foreground">Envie uma Mensagem</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Preencha o formulário abaixo e eu responderei o mais breve possível.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Nome</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="exemplo@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">Assunto</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Sobre o que vamos conversar?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Mensagem</Label>
                  <Textarea
                    id="message"
                    placeholder="Descreva seu projeto ou dúvida em detalhes..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  Enviar Mensagem
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 py-12 text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Mensagem Enviada!
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Obrigado pelo contato. Responderei em breve.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Informações de Contato */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-xl font-semibold text-foreground">Outras Formas de Conectar</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Prefere uma comunicação direta? Escolha o canal de sua preferência.
            </p>
          </div>

          <div className="space-y-4">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group flex items-center gap-4 rounded-xl border border-border/50 bg-card p-4 transition-colors hover:border-primary/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <link.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-base text-white">{link.label}</div>
                 
                </div>
              </motion.a>
            ))}
          </div>

          {/* Disponibilidade */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
              </span>
              <span className="font-medium text-foreground">Disponível para Oportunidades</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Atualmente estou aberto a novos projetos e parcerias. O tempo médio 
              de resposta é de 24 a 48 horas.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}