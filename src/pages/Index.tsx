import { Server, ChevronDown } from "lucide-react";

const Index = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="mb-8">
          <Server className="h-20 w-20 mx-auto mb-6" style={{
            strokeLinecap: "round",
            strokeLinejoin: "round",
            stroke: "url(#gradient)",
            fill: "none"
          }} />
          <svg width="0" height="0">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(270, 80%, 65%)" />
                <stop offset="100%" stopColor="hsl(180, 80%, 60%)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <h1 
          className="text-7xl md:text-8xl font-bold mb-6"
          style={{
            background: "linear-gradient(90deg, hsl(270, 80%, 65%), hsl(180, 80%, 60%))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}
        >
          AxyteHost
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
          Installation Guide
        </h2>
        
        <p className="text-muted-foreground text-lg mb-12">
          Complete setup guide for AxyteHost Panel
        </p>
        
        <button 
          onClick={scrollToContent}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <span className="text-sm">Scroll down to begin</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </button>
      </section>

      {/* What You'll Install Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center">What You'll Install</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">AxyteHost Panel</h3>
            <p className="text-muted-foreground text-sm">
              Web-based server management interface
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Wings Daemon</h3>
            <p className="text-muted-foreground text-sm">
              Server-side daemon for managing servers
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Cloudflare Tunnel</h3>
            <p className="text-muted-foreground text-sm">
              Secure connection without port forwarding
            </p>
          </div>
        </div>

        {/* Installation Steps */}
        <h2 className="text-4xl font-bold mb-12 text-center">Installation Steps</h2>
        
        <div className="space-y-12">
          {/* Step 1 */}
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Initial Setup</h3>
                <p className="text-muted-foreground mb-4">Update system and install curl</p>
                <div className="bg-black/50 border border-border rounded-lg p-4 font-mono text-sm">
                  <code className="text-foreground">apt update && apt install curl -y</code>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Run AxyteHost Installer</h3>
                <p className="text-muted-foreground mb-4">Execute the automated installation script</p>
                <div className="bg-black/50 border border-border rounded-lg p-4 font-mono text-sm mb-4">
                  <code className="text-foreground">bash &lt;(curl https://installer.axytehost.com)</code>
                </div>
                
                <p className="text-sm font-semibold mb-2">Configuration options:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Domain/subdomain: panel.axytehost.com</li>
                  <li>• UFW: no</li>
                  <li>• HTTPS using Let's Encrypt: n</li>
                  <li>• Assume SSL: y</li>
                  <li>• Agree HTTPS request: n</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">SSL Certificate Setup</h3>
                <p className="text-muted-foreground mb-4">Generate self-signed certificates and configure Nginx</p>
                <div className="bg-black/50 border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-foreground text-xs">{`openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /2.pem -out /1.pem -subj "/CN=localhost"
sed -i 's|^\\s*ssl_certificate\\s\\+.*|    ssl_certificate /1.pem;|' /etc/nginx/sites-available/axytehost.conf
sed -i 's|^\\s*ssl_certificate_key\\s\\+.*|    ssl_certificate_key /2.pem;|' /etc/nginx/sites-available/axytehost.conf
sed -i 's/\\b443\\b/8443/g; s/\\b80\\b/8000/g' /etc/nginx/sites-available/axytehost.conf
systemctl restart nginx`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Cloudflare Tunnel Configuration</h3>
                <p className="text-muted-foreground mb-4">Set up secure tunnel for external access</p>
                
                <p className="text-sm mb-3">Go to <a href="https://one.dash.cloudflare.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">one.dash.cloudflare.com</a></p>
                
                <p className="text-sm font-semibold mb-2">Steps:</p>
                <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                  <li>Network → Tunnels → Create Tunnel</li>
                  <li>Select cloudflared, name it whatever you want</li>
                  <li>Choose Debian → install cloudflared</li>
                  <li>Install the service for auto-start</li>
                  <li>Use the same subdomain as earlier</li>
                  <li>Service Type: https</li>
                  <li>Service URL: localhost:8443</li>
                  <li>Enable "No TLS Verify" in Additional Settings</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                5
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Wings Installation</h3>
                <p className="text-muted-foreground mb-4">Install and configure the Wings daemon</p>
                
                <p className="text-sm mb-3">Run the installer again, but select 1 for Wings</p>
                
                <p className="text-sm font-semibold mb-2">Configuration:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Unsupported virtualization: y</li>
                  <li>• UFW, DB user, Let's Encrypt: n</li>
                  <li>• Node subdomain: node.axytehost.com</li>
                  <li>• Service URL: localhost:443</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                6
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Panel Configuration</h3>
                <p className="text-muted-foreground mb-4">Set up locations and nodes in the admin panel</p>
                
                <p className="text-sm font-semibold mb-2">Admin Panel Steps:</p>
                <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                  <li>Login to panel</li>
                  <li>Admin → Locations → Create location (e.g., US1)</li>
                  <li>Admin → Nodes → Add node</li>
                  <li>Daemon Port: 443</li>
                  <li>SSL: Not Behind Proxy</li>
                  <li>FQDN: node.axytehost.com</li>
                  <li>Copy config token and run the command</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Step 7 */}
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                7
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Final Wings Configuration</h3>
                <p className="text-muted-foreground mb-4">Configure SSL certificates for Wings</p>
                
                <p className="text-sm font-semibold mb-2">If panel and node are on different hosts:</p>
                <div className="bg-black/50 border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
                  <pre className="text-foreground text-xs">{`openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /2.pem -out /1.pem -subj "/CN=localhost"
sed -i 's|^\\(\\s*cert:\\s*\\).*|\\1/1.pem|' /etc/axytehost/config.yml
sed -i 's|^\\(\\s*key:\\s*\\).*|\\1/2.pem|' /etc/axytehost/config.yml
systemctl restart wings`}</pre>
                </div>

                <p className="text-sm font-semibold mb-2">If panel and node are on the same host:</p>
                <div className="bg-black/50 border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-foreground text-xs">{`sed -i 's|^\\(\\s*cert:\\s*\\).*|\\1/1.pem|' /etc/axytehost/config.yml
sed -i 's|^\\(\\s*key:\\s*\\).*|\\1/2.pem|' /etc/axytehost/config.yml
systemctl restart wings`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* Step 8 */}
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                8
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Server Configuration</h3>
                <p className="text-muted-foreground mb-4">Set up allocations and port forwarding</p>
                
                <p className="text-sm font-semibold mb-2">Allocation Config:</p>
                <div className="bg-black/50 border border-border rounded-lg p-4 font-mono text-sm mb-4">
                  <pre className="text-foreground text-xs">{`IP: 0.0.0.0
Alias: localhost
Ports: 1025-2024`}</pre>
                </div>

                <p className="text-sm font-semibold mb-2">Port Forwarding:</p>
                <div className="bg-black/50 border border-border rounded-lg p-4 font-mono text-sm mb-4">
                  <code className="text-foreground">port add 1025</code>
                </div>

                <p className="text-sm text-muted-foreground">
                  Connect via: server.axytehost.com:1025
                </p>
              </div>
            </div>
          </div>

          {/* Step 9 */}
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                9
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">SRV Record Setup (Optional)</h3>
                <p className="text-muted-foreground mb-4">Hide port numbers using DNS SRV records</p>
                
                <p className="text-sm font-semibold mb-2">A Record:</p>
                <div className="bg-black/50 border border-border rounded-lg p-4 font-mono text-sm mb-4">
                  <pre className="text-foreground text-xs">{`Type: A
Name: mc.axytehost.com
IPv4 address: 192.168.1.1
Proxy status: DNS only (gray cloud)`}</pre>
                </div>

                <p className="text-sm font-semibold mb-2">SRV Record:</p>
                <div className="bg-black/50 border border-border rounded-lg p-4 font-mono text-sm">
                  <pre className="text-foreground text-xs">{`Type: SRV
Name: _minecraft._tcp.mc
Priority: 0
Weight: 0
Port: 25575
Target: mc.axytehost.com`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-20"></div>
    </div>
  );
};

export default Index;
