import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, Brain, TrendingUp, Zap, Activity, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-athlete.jpg";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const Index = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from("users").select("*");

      if (error) {
        setError(error.message);
        console.error("Error fetching users:", error);
      } else {
        setUsers(data);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-background particles-bg">
      {/* Navigation */}
      <nav className="glass border-b border-primary/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">SmartPeak</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Link to="/training" className="text-muted-foreground hover:text-primary transition-colors">
                Treinos
              </Link>
              <Link to="/insights" className="text-muted-foreground hover:text-primary transition-colors">
                Insights
              </Link>
              <Button variant="hero" size="sm">
                Começar Agora
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={heroImage} 
            alt="Athlete performance visualization" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-foreground">Transforme</span>
                  <br />
                  <span className="bg-gradient-hero bg-clip-text text-transparent">
                    Treinos em
                  </span>
                  <br />
                  <span className="text-foreground">Estratégia</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Performance inteligente para atletas Garmin. Evolua com ciência de dados e insights de IA.
                  <span className="block mt-2 text-primary font-semibold">
                    Treino é físico. Evolução é nos dados.
                  </span>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" className="group">
                  Conectar Garmin
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="xl">
                  Ver Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10k+</div>
                  <div className="text-sm text-muted-foreground">Atletas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500k+</div>
                  <div className="text-sm text-muted-foreground">Treinos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Precisão IA</div>
                </div>
              </div>
            </div>

            <div className="relative lg:block hidden">
              <div className="glass-glow p-8 rounded-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Pico de Performance</span>
                    <span className="text-success font-semibold">+12%</span>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-lg flex items-end p-4">
                    <div className="flex space-x-1 items-end h-full w-full">
                      {[40, 65, 45, 80, 60, 95, 75, 100, 85].map((height, i) => (
                        <div 
                          key={i}
                          className="bg-gradient-hero rounded-t flex-1"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">VO2 Max</div>
                      <div className="font-semibold text-primary">58.2</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Zone 2</div>
                      <div className="font-semibold text-chart-good">85%</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Recovery</div>
                      <div className="font-semibold text-chart-excellent">Ótimo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supabase Test Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              Supabase Integration Test
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fetching users from the 'users' table.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Users</CardTitle>
            </CardHeader>
            <CardContent>
              {error && <p className="text-red-500">{error}</p>}
              {users.length > 0 ? (
                <ul>
                  {users.map((user) => (
                    <li key={user.id}>{JSON.stringify(user)}</li>
                  ))}
                </ul>
              ) : (
                <p>No users found or still loading...</p>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              Ciência dos Dados Aplicada ao Esporte
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transformamos seus dados do Garmin em insights acionáveis para maximizar sua performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="scroll-reveal">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Análise Inteligente</CardTitle>
                <CardDescription>
                  IA analisa padrões únicos do seu treino e identifica oportunidades de melhoria
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="scroll-reveal">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Pico de Performance</CardTitle>
                <CardDescription>
                  Detecte quando você está no seu melhor momento e otimize seus treinos
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="scroll-reveal">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Comparativo Avançado</CardTitle>
                <CardDescription>
                  Compare sessões e identifique progressos com visualizações interativas
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="scroll-reveal">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Alertas Preventivos</CardTitle>
                <CardDescription>
                  Evite overtraining com alertas inteligentes baseados em dados
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="scroll-reveal">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Insights Personalizados</CardTitle>
                <CardDescription>
                  Receba sugestões semanais customizadas para seu perfil atlético
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="scroll-reveal">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Benchmarks Inteligentes</CardTitle>
                <CardDescription>
                  Compare sua performance com atletas similares e defina metas realistas
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-glow rounded-3xl p-12 space-y-8">
            <h2 className="text-4xl font-bold text-foreground">
              Pronto para Evoluir com Dados?
            </h2>
            <p className="text-xl text-muted-foreground">
              Junte-se a milhares de atletas que já transformaram sua performance com SmartPeak
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group">
                Começar Gratuitamente
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Agendar Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Integração com Garmin • 30 dias grátis • Sem cartão de crédito
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/10 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">SmartPeak</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 SmartPeak. Transformando treinos em estratégia com IA.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;