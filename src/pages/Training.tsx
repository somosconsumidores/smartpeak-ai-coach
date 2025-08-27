import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Activity,
  Clock,
  MapPin,
  Heart,
  Zap,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Timer,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";

const Training = () => {
  return (
    <div className="min-h-screen bg-background particles-bg">
      {/* Navigation */}
      <nav className="glass border-b border-primary/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">SmartPeak</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Link to="/training" className="text-primary font-medium">
                Treinos
              </Link>
              <Link to="/insights" className="text-muted-foreground hover:text-primary transition-colors">
                Insights
              </Link>
              <Link to="/profile" className="text-muted-foreground hover:text-primary transition-colors">
                Perfil
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Sessão de Treino</h1>
          <p className="text-muted-foreground">Análise completa da sua última atividade</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Training Summary */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Session Overview */}
            <Card className="performance-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="w-5 h-5 text-primary" />
                      Corrida Intervalada - Manhã
                    </CardTitle>
                    <CardDescription>
                      Hoje, 07:30 • Vila Madalena, SP
                    </CardDescription>
                  </div>
                  <div className="px-3 py-1 bg-chart-excellent/10 text-chart-excellent text-sm font-medium rounded-full">
                    Excelente
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6 mb-6">
                  <div className="text-center">
                    <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">45:32</div>
                    <div className="text-sm text-muted-foreground">Duração</div>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">8.2km</div>
                    <div className="text-sm text-muted-foreground">Distância</div>
                  </div>
                  <div className="text-center">
                    <Timer className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">5:33</div>
                    <div className="text-sm text-muted-foreground">Pace Médio</div>
                  </div>
                  <div className="text-center">
                    <Heart className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">162</div>
                    <div className="text-sm text-muted-foreground">FC Média</div>
                  </div>
                </div>

                {/* Zones Chart */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Distribuição por Zonas</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Zona 1 (Recuperação)</span>
                      <span className="text-sm font-medium">12%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-chart-excellent h-2 rounded-full" style={{width: '12%'}}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Zona 2 (Aeróbica)</span>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-chart-good h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Zona 3 (Tempo)</span>
                      <span className="text-sm font-medium">25%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-chart-average h-2 rounded-full" style={{width: '25%'}}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Zona 4 (Limiar)</span>
                      <span className="text-sm font-medium">18%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-chart-poor h-2 rounded-full" style={{width: '18%'}}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Analysis */}
            <Card className="performance-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Análise de IA
                </CardTitle>
                <CardDescription>
                  Insights sobre sua performance nesta sessão
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* What worked */}
                <div className="space-y-3">
                  <h4 className="font-medium text-chart-excellent flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    O que funcionou bem
                  </h4>
                  <div className="grid gap-2">
                    <div className="p-3 bg-chart-excellent/10 border border-chart-excellent/20 rounded-lg">
                      <p className="text-sm text-foreground">
                        <strong>Consistência de Pace:</strong> Manteve ritmo estável nos intervalos de alta intensidade, 
                        demonstrando boa capacidade anaeróbica.
                      </p>
                    </div>
                    <div className="p-3 bg-chart-excellent/10 border border-chart-excellent/20 rounded-lg">
                      <p className="text-sm text-foreground">
                        <strong>Recuperação Eficiente:</strong> FC voltou rapidamente aos níveis base entre intervalos, 
                        indicando boa aptidão cardiovascular.
                      </p>
                    </div>
                  </div>
                </div>

                {/* What to improve */}
                <div className="space-y-3">
                  <h4 className="font-medium text-chart-average flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    Pontos de melhoria
                  </h4>
                  <div className="grid gap-2">
                    <div className="p-3 bg-chart-average/10 border border-chart-average/20 rounded-lg">
                      <p className="text-sm text-foreground">
                        <strong>Cadência:</strong> Média de 168 spm está abaixo do ideal (180+). 
                        Trabalhe passos mais curtos e rápidos.
                      </p>
                    </div>
                    <div className="p-3 bg-chart-average/10 border border-chart-average/20 rounded-lg">
                      <p className="text-sm text-foreground">
                        <strong>Pacing:</strong> Últimos 2km mostraram fadiga. Considere aquecimento mais longo 
                        ou redução de 5% na intensidade.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recovery Feedback */}
            <Card className="performance-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Feedback de Recuperação
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-chart-good/10 rounded-lg">
                  <div className="text-2xl font-bold text-chart-good mb-1">24h</div>
                  <div className="text-sm text-muted-foreground">Tempo sugerido para próximo treino intenso</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Stress do Treino</span>
                    <span className="text-sm font-medium text-chart-average">Moderado</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">HRV Matinal</span>
                    <span className="text-sm font-medium text-chart-good">Normal</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Qualidade do Sono</span>
                    <span className="text-sm font-medium text-chart-excellent">Boa</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border">
                  <Button variant="glass" className="w-full">
                    <Target className="w-4 h-4" />
                    Planejar Próximo Treino
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Performance Comparison */}
            <Card className="performance-card">
              <CardHeader>
                <CardTitle>Comparação com Média</CardTitle>
                <CardDescription>Últimos 30 dias</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Pace Médio</span>
                    <span className="text-sm font-medium text-chart-excellent">+8%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Distância</span>
                    <span className="text-sm font-medium text-chart-good">+12%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">FC Média</span>
                    <span className="text-sm font-medium text-chart-average">-2%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">TSS</span>
                    <span className="text-sm font-medium text-chart-excellent">+15%</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border">
                  <Link to="/comparison" className="w-full">
                    <Button variant="glass" className="w-full">
                      Ver Comparativo Detalhado
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="performance-card">
              <CardHeader>
                <CardTitle>Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="performance" className="w-full justify-start">
                  <Activity className="w-4 h-4" />
                  Sincronizar Garmin
                </Button>
                
                <Button variant="glass" className="w-full justify-start">
                  <TrendingUp className="w-4 h-4" />
                  Exportar Dados
                </Button>
                
                <Link to="/insights">
                  <Button variant="glass" className="w-full justify-start">
                    <Target className="w-4 h-4" />
                    Ver Insights Semanais
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;