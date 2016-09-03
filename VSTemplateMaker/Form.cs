using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace VSTemplateMaker
{
    public partial class Form : System.Windows.Forms.Form
    {
        public Form()
        {
            InitializeComponent();
        }

        private void BrowseBtn_Click(object sender, EventArgs e)
        {
            if (this.folderBrowserDialog.ShowDialog() == DialogResult.OK) {
                this.PathTB.Text = this.folderBrowserDialog.SelectedPath;
            }         
        }

        private void InstallBtn_Click(object sender, EventArgs e)
        {
            try
            {
                string folderPath = this.PathTB.Text;

                if (!System.IO.Directory.Exists(folderPath))
                {
                    System.IO.Directory.CreateDirectory(folderPath);
                }

                string filePath = System.IO.Path.Combine(folderPath, "AngularTSModule.zip");
                System.IO.File.Copy("AngularTSModule.zip", filePath, true);

                MessageBox.Show("Successfully Installed!");
            }
            catch(Exception exp)
            {
                MessageBox.Show(exp.Message);
            }

        }
    }
}
