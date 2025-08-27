import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  TrendingUp, 
  AlertTriangle, 
  Heart, 
  Timer, 
  Target,
  Calendar,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Mock data para demonstração
  const weeklyData = [
    { day: 'Seg', value: 85 },
    { day: 'Ter', value: 92 },
    { day: 'Qua', value: 78 },
    { day: 'Qui', value: 95 },
    { day: 'Sex', value: 88 },
    { day: 'Sáb', value: 100 },
    { day: 'Dom', value: 65 },
  ];

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
              <Link to="/dashboard" className="text-primary font-medium">
                Dashboard
              </Link>
              <Link to="/training" className="text-muted-foreground hover:text-primary transition-colors">
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
          <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Visão geral da sua performance e insights</p>
        </div>

        {/* Performance Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="performance-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Pico de Performance
                </CardTitle>
                <TrendingUp className="w-4 h-4 text-chart-excellent" />
              </div>
              <div className="text-2xl font-bold text-chart-excellent">94%</div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                +8% vs semana anterior
              </p>
            </CardContent>
          </Card>

          <Card className="performance-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  VO2 Max
                </CardTitle>
                <Heart className="w-4 h-4 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">58.2</div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Excelente para sua idade
              </p>
            </CardContent>
          </Card>

          <Card className="performance-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Carga Semanal
                </CardTitle>
                <Activity className="w-4 h-4 text-chart-good" />
              </div>
              <div className="text-2xl font-bold text-foreground">486</div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                TSS acumulado
              </p>
            </CardContent>
          </Card>

          <Card className="performance-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Recuperação
                </CardTitle>
                <Timer className="w-4 h-4 text-chart-average" />
              </div>
              <div className="text-2xl font-bold text-chart-average">Moderada</div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                24h até próximo treino intenso
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Weekly Evolution Chart */}
          <div className="lg:col-span-2">
            <Card className="performance-card h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Evolução Semanal
                </CardTitle>
                <CardDescription>
                  Performance dos últimos 7 dias
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Chart Area */}
                  <div className="h-64 bg-gradient-to-t from-primary/5 to-transparent rounded-lg p-4">
                    <div className="flex items-end justify-between h-full">
                      {weeklyData.map((item, index) => (
                        <div key={index} className="flex flex-col items-center space-y-2">
                          <div 
                            className="bg-gradient-hero rounded-t w-8 transition-all duration-300 hover:bg-primary-glow"
                            style={{ height: `${(item.value / 100) * 200}px` }}
                          />
                          <span className="text-xs text-muted-foreground">{item.day}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-chart-excellent font-semibold">Pico</div>
                      <div className="text-muted-foreground">Sábado</div>
                    </div>
                    <div className="text-center">
                      <div className="text-primary font-semibold">Média</div>
                      <div className="text-muted-foreground">86%</div>
                    </div>
                    <div className="text-center">
                      <div className="text-chart-average font-semibold">Tendência</div>
                      <div className="text-muted-foreground">Crescente</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alerts and Actions */}
          <div className="space-y-6">
            {/* Intelligent Alerts */}
            <Card className="performance-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  Alertas Inteligentes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-warning pl-4">
                  <h4 className="font-medium text-warning">Risco de Overtraining</h4>
                  <p className="text-sm text-muted-foreground">
                    Carga de treino 15% acima da média. Consider descanso ativo amanhã.
                  </p>
                </div>
                
                <div className="border-l-4 border-chart-excellent pl-4">
                  <h4 className="font-medium text-chart-excellent">Janela de Performance</h4>
                  <p className="text-sm text-muted-foreground">
                    Próximas 48h ideais para treino de alta intensidade.
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium text-primary">Meta Semanal</h4>
                  <p className="text-sm text-muted-foreground">
                    78% concluído. Mais 2 treinos para atingir objetivo.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="performance-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Ações Rápidas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/training">
                  <Button variant="glass" className="w-full justify-start">
                    <Activity className="w-4 h-4" />
                    Nova Sessão de Treino
                  </Button>
                </Link>
                
                <Link to="/insights">
                  <Button variant="glass" className="w-full justify-start">
                    <TrendingUp className="w-4 h-4" />
                    Ver Insights Semanais
                  </Button>
                </Link>
                
                <Button variant="glass" className="w-full justify-start">
                  <Calendar className="w-4 h-4" />
                  Planejar Próxima Semana
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="performance-card">
              <CardHeader>
                <CardTitle>Atividade Recente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-chart-excellent rounded-full"></div>
                    <div>
                      <div className="text-sm font-medium">Corrida Intervalada</div>
                      <div className="text-xs text-muted-foreground">Hoje, 07:30</div>
                    </div>
                  </div>
                  <div className="text-sm text-chart-excellent font-medium">Excelente</div>
                </div>
                
                <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-chart-good rounded-full"></div>
                    <div>
                      <div className="text-sm font-medium">Treino de Força</div>
                      <div className="text-xs text-muted-foreground">Ontem, 18:00</div>
                    </div>
                  </div>
                  <div className="text-sm text-chart-good font-medium">Bom</div>
                </div>
                
                <div className="flex items-center justify-between p-2 rounded-lg bg-primary/5">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-chart-average rounded-full"></div>
                    <div>
                      <div className="text-sm font-medium">Recuperação Ativa</div>
                      <div className="text-xs text-muted-foreground">Anteontem, 16:30</div>
                    </div>
                  </div>
                  <div className="text-sm text-chart-average font-medium">Moderado</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;