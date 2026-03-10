import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { employees } from '../../assets/data/employees.js';
import './directory.css';

// Organize employees into rows: 2-3-2 hexagonal pattern
const employeeRows = [
  employees.slice(0, 2),  // Row 1: First 2 (Co-founders)
  employees.slice(2, 5),  // Row 2: Next 3
  employees.slice(5, 7),  // Row 3: Last 2
];

function Directory() {
    return (
    <div className="directory-container">
      <div className="directory-content">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="directory-header"
        >
          <h1 className="directory-title">Leadership Team</h1>
          <p className="directory-subtitle">
            Meet the experts driving innovation in autonomous aerial defense systems
          </p>
        </motion.div>

        {/* Employee Grid */}
        <div className="employee-grid">
          {employeeRows.map((row, rowIndex) => (
            <div key={rowIndex} className="employee-row">
              {row.map((employee, index) => (
                <motion.div
                  key={employee.email || employee.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="employee-card"
                >
                  {/* Glow Effect on Hover */}
                  <div className="card-glow" />
                  <div className="card-glow-blur" />

                  <div className="card-content">
                    {/* Photo */}
                    <div className="employee-photo-wrapper">
                      <img
                        src={employee.image}
                        alt={employee.name}
                        className="employee-photo"
                      />
                    </div>

                    {/* Info */}
                    <div className="employee-info">
                      <h3 className="employee-name">{employee.name}</h3>
                      <p className="employee-title">{employee.title}</p>

                      {/* Email - only show if email exists */}
                      {employee.email && (
                        <a href={`mailto:${employee.email}`} className="employee-email">
                          <Mail className="email-icon" />
                          <span>{employee.email}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Directory;