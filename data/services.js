// v1.5/data/services.js

const services = {
  reactive: [
    {
      name: 'Full Vehicle Diagnostic Scan',
      description: 'Comprehensive factory-grade scan of all electronic control units to uncover hidden issues before they escalate.',
      price: 50
    },
    {
      name: 'Guided Fault Remediation',
      description: 'Step-by-step troubleshooting guidance with repair instructions, torque specs, and component tests.',
      price: 100
    },
    {
      name: 'Live Data Monitoring & Actuation',
      description: 'Real-time system monitoring and on-demand component activation (pumps, fans, sensors).',
      price: 60
    },
    {
      name: 'Freeze-Frame Analysis',
      description: 'Capture and analyze sensor values at the exact moment a fault occurs for deep root-cause diagnostics.',
      price: 40
    },
    {
      name: 'Error Code Clearing',
      description: 'Erase all current and historical fault codes after repair validation.',
      price: 30
    },
    {
      name: 'Service Interval Reset',
      description: 'Reset oil, brake pad, filter, and general service reminders to factory settings.',
      price: 40
    },
    {
      name: 'Battery Registration & Health Check',
      description: 'Register new battery specifications and perform a full charging system test.',
      price: 40
    },
    {
      name: 'DPF Regeneration & Reset',
      description: 'Force particulate filter burn-off cycle and reset DPF counters (diesel models).',
      price: 80
    },
    {
      name: 'Transmission Adaptation Reset',
      description: 'Clear transmission adaptation values to restore optimal shift quality.',
      price: 60
    },
    {
      name: 'Steering Angle Sensor Calibration',
      description: 'Recalibrate the steering sensor for accurate wheel alignment and stability control.',
      price: 60
    },
    {
      name: 'Air Suspension Leveling',
      description: 'Level ride-height sensors on air-suspension-equipped vehicles for a smooth, even stance.',
      price: 80
    },
    {
      name: 'Cooling System Test & Thermostat Activation',
      description: 'Run pressure tests on cooling components and activate thermostat cycles for diagnostics.',
      price: 50
    },
    {
      name: 'Climate System Initialization',
      description: 'Initialize HVAC actuators and confirm sensor readings for proper climate control operation.',
      price: 50
    }
  ],
  proactive: [
    {
      name: 'Auto-Lock on Drive-Off',
      description: 'Automatically locks doors once the vehicle begins moving for added security.',
      price: 40
    },
    {
      name: 'Mirror Fold on Lock',
      description: 'Fold side mirrors in automatically when locking the car for compact parking.',
      price: 40
    },
    {
      name: 'Comfort Window Operation',
      description: 'One-touch up/down for all windows from a single button in the driver’s door.',
      price: 40
    },
    {
      name: 'Remote Trunk Control',
      description: 'Enable trunk or tailgate operation from the key fob or central console.',
      price: 50
    },
    {
      name: 'Digital Speed Display',
      description: 'Adds a digital overlay of vehicle speed in the instrument cluster for precision.',
      price: 80
    },
    {
      name: 'Performance Gauges in Cluster',
      description: 'Unlock lap timer, G-force meter, and additional performance readouts.',
      price: 80
    },
    {
      name: 'Welcome Light Sequence',
      description: 'Stylish multi-step lighting choreography on unlock to welcome driver and passengers.',
      price: 50
    },
    {
      name: 'Disable Startup Prompts',
      description: 'Remove repetitive iDrive and parking brake prompts on each engine start.',
      price: 40
    },
    {
      name: 'Seatbelt Chime Disable',
      description: 'Silence seatbelt reminder chimes per seat (VIP or track mode).',
      price: 30,
      options: ['Front Left','Front Right','Rear Left','Rear Center','Rear Right']
    },
    {
      name: 'Auto Start/Stop Memory',
      description: 'Remember your last engine auto start/stop preference and apply it on each startup.',
      price: 40
    },
    {
      name: 'Cornering Lights via Fogs',
      description: 'Activate fog lights as cornering lights at low speeds for better night visibility.',
      price: 50
    },
    {
      name: 'Ambient Lighting Customization',
      description: 'Unlock full RGB interior accent lighting modes and brightness controls.',
      price: 60
    },
    {
      name: 'Mirror Puddle Lights',
      description: 'Illuminate ground area beneath side mirrors when doors open for safety.',
      price: 40
    }
  ],
  combo: [
    {
      name: 'Tech Tune-Up Pack',
      description: 'Full diagnostic scan + transmission reset + battery registration—comprehensive health check.',
      price: 120
    },
    {
      name: 'Comfort & Style Bundle',
      description: 'Mirror fold + welcome lights + ambient lighting for a premium in-car experience.',
      price: 110
    },
    {
      name: 'Performance Start Kit',
      description: 'Performance gauges + lap timer + G-force meter—get track-ready in minutes.',
      price: 130
    },
    {
      name: 'Complete Service Combo',
      description: 'Full scan + DPF regeneration + transmission adaptation reset for total system refresh.',
      price: 160
    },
    {
      name: 'Ultimate VIP Package',
      description: 'Top-seller: 5 comfort codes + one retrofit activation + ECU flash + PDF report bundle.',
      price: 450
    }
  ]
};

export default services;
