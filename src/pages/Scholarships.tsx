import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CalendarDays,
  Clock3,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Users,
  WalletCards,
} from "lucide-react";

const opportunities = [
  { code: "PD1", title: "Solos, Sedimentos e Rastreabilidade", institution: "UFLA", type: "Pós-Doutorado" },
  { code: "IC1", title: "Solos e Sedimentos", institution: "UFLA", type: "Iniciação Científica" },
  { code: "IC2", title: "Eventos Extremos e Impactos", institution: "UFMG", type: "Iniciação Científica" },
  { code: "PD2", title: "Mudanças Climáticas, Expansão Urbana e Ilhas de Calor", institution: "INPE", type: "Pós-Doutorado · dedicação parcial" },
  { code: "IC3", title: "Impactos Sociais de Eventos Extremos", institution: "UFMG", type: "Iniciação Científica · 2 vagas" },
  { code: "IC4", title: "Demanda e Consumo de Água", institution: "UFMG", type: "Iniciação Científica" },
  { code: "IC5", title: "Dados de Consumo e Dinâmica Populacional", institution: "UFMG", type: "Iniciação Científica" },
  { code: "IC6", title: "Monitoramento e Drenagem Urbana", institution: "UFMG", type: "Iniciação Científica" },
];

const editalUrl = `${import.meta.env.BASE_URL}edital-missao-pampulha-2026.pdf`;
const emailUrl = "mailto:hydrouai@gmail.com?subject=MISS%C3%83O%20PAMPULHA%20%E2%80%93%20BOLSA%20%5BC%C3%93DIGO%20DO%20PERFIL%5D%20%E2%80%93%20%5BNOME%20COMPLETO%5D";

const Scholarships = () => (
  <div className="py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <Badge className="mb-5 bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">
          Edital Simplificado nº 02/2026
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Bolsas de pesquisa · Projeto Missão Pampulha
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Seleção de bolsistas para integrar a Equipe de Recursos Hídricos do Projeto Missão Pampulha,
          da Escola de Engenharia da UFMG.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
            <a href={editalUrl} target="_blank" rel="noreferrer">
              <Download className="h-5 w-5 mr-2" /> Consultar edital completo
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={emailUrl}>
              <Mail className="h-5 w-5 mr-2" /> Inscrever-se por e-mail
            </a>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
        <Card className="shadow-elegant">
          <CardContent className="pt-6 flex gap-3">
            <CalendarDays className="h-6 w-6 text-primary shrink-0" />
            <div><p className="font-semibold">Inscrições</p><p className="text-sm text-muted-foreground">04 a 09/09/2026, até 23h59</p></div>
          </CardContent>
        </Card>
        <Card className="shadow-elegant">
          <CardContent className="pt-6 flex gap-3">
            <Clock3 className="h-6 w-6 text-primary shrink-0" />
            <div><p className="font-semibold">Carga horária</p><p className="text-sm text-muted-foreground">15 a 40 h/semana, conforme a modalidade</p></div>
          </CardContent>
        </Card>
        <Card className="shadow-elegant">
          <CardContent className="pt-6 flex gap-3">
            <WalletCards className="h-6 w-6 text-primary shrink-0" />
            <div><p className="font-semibold">Bolsas</p><p className="text-sm text-muted-foreground">R$ 1.200 a R$ 9.500 por mês</p></div>
          </CardContent>
        </Card>
        <Card className="shadow-elegant">
          <CardContent className="pt-6 flex gap-3">
            <MapPin className="h-6 w-6 text-primary shrink-0" />
            <div><p className="font-semibold">Locais</p><p className="text-sm text-muted-foreground">Belo Horizonte, Lavras e Cachoeira Paulista</p></div>
          </CardContent>
        </Card>
      </div>

      <section className="mb-14" aria-labelledby="opportunities-title">
        <div className="text-center mb-8">
          <h2 id="opportunities-title" className="text-3xl font-bold text-foreground mb-3">Oportunidades</h2>
          <p className="text-muted-foreground">Uma oportunidade por código, exceto IC3, com duas vagas.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {opportunities.map((opportunity) => (
            <Card key={opportunity.code} className="shadow-elegant hover:shadow-lg transition-smooth">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <Badge>{opportunity.code}</Badge>
                  <span className="text-sm font-medium text-muted-foreground">{opportunity.institution}</span>
                </div>
                <CardTitle className="text-xl leading-tight">{opportunity.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <GraduationCap className="h-4 w-4 text-primary" /> {opportunity.type}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        <Card className="bg-secondary border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-primary" /> Requisitos e documentos</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-3">
            <p>A formação e a experiência exigidas variam conforme o perfil. Consulte o edital completo antes de se inscrever.</p>
            <p>Envie, em PDF, o currículo profissional atualizado e o Currículo Lattes atualizado, com link público.</p>
          </CardContent>
        </Card>
        <Card className="bg-secondary border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><CalendarDays className="h-5 w-5 text-primary" /> Seleção</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-3">
            <p>As entrevistas serão realizadas em 11/09/2026, por videoconferência.</p>
            <p>As inscrições são gratuitas e devem ser enviadas exclusivamente para <a className="text-primary underline underline-offset-4" href={emailUrl}>hydrouai@gmail.com</a>.</p>
          </CardContent>
        </Card>
      </section>

      <div className="rounded-lg gradient-hero text-primary-foreground p-7 md:p-9 text-center">
        <h2 className="text-2xl font-bold mb-3">Como se inscrever</h2>
        <p className="text-primary-foreground/85 max-w-3xl mx-auto mb-6">
          No assunto do e-mail, use: MISSÃO PAMPULHA – BOLSA [CÓDIGO DO PERFIL] – [NOME COMPLETO].
          Para concorrer a mais de um perfil, envie uma inscrição separada para cada código.
        </p>
        <Button asChild size="lg" variant="secondary">
          <a href={emailUrl}><Mail className="h-5 w-5 mr-2" /> Enviar inscrição</a>
        </Button>
      </div>
    </div>
  </div>
);

export default Scholarships;
