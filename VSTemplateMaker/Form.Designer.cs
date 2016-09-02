namespace VSTemplateMaker
{
    partial class Form
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.InstallBtn = new System.Windows.Forms.Button();
            this.folderBrowserDialog = new System.Windows.Forms.FolderBrowserDialog();
            this.PathTB = new System.Windows.Forms.TextBox();
            this.BrowseBtn = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // InstallBtn
            // 
            this.InstallBtn.Location = new System.Drawing.Point(545, 94);
            this.InstallBtn.Name = "InstallBtn";
            this.InstallBtn.Size = new System.Drawing.Size(157, 52);
            this.InstallBtn.TabIndex = 0;
            this.InstallBtn.Text = "Install";
            this.InstallBtn.UseVisualStyleBackColor = true;
            this.InstallBtn.Click += new System.EventHandler(this.InstallBtn_Click);
            // 
            // folderBrowserDialog
            // 
            this.folderBrowserDialog.SelectedPath = "C:\\Users\\ysqev\\OneDrive\\文档\\Visual Studio 2015\\Templates\\ItemTemplates\\Visual C#";
            // 
            // PathTB
            // 
            this.PathTB.Location = new System.Drawing.Point(59, 201);
            this.PathTB.Name = "PathTB";
            this.PathTB.Size = new System.Drawing.Size(454, 31);
            this.PathTB.TabIndex = 1;
            this.PathTB.Text = "C:\\Users\\ysqev\\OneDrive\\文档\\Visual Studio 2015\\Templates\\ItemTemplates\\Visual C#\\";
            // 
            // BrowseBtn
            // 
            this.BrowseBtn.Location = new System.Drawing.Point(545, 191);
            this.BrowseBtn.Name = "BrowseBtn";
            this.BrowseBtn.Size = new System.Drawing.Size(157, 50);
            this.BrowseBtn.TabIndex = 2;
            this.BrowseBtn.Text = "Browse";
            this.BrowseBtn.UseVisualStyleBackColor = true;
            this.BrowseBtn.Click += new System.EventHandler(this.BrowseBtn_Click);
            // 
            // Form
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(12F, 25F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(809, 398);
            this.Controls.Add(this.BrowseBtn);
            this.Controls.Add(this.PathTB);
            this.Controls.Add(this.InstallBtn);
            this.Name = "Form";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button InstallBtn;
        private System.Windows.Forms.FolderBrowserDialog folderBrowserDialog;
        private System.Windows.Forms.TextBox PathTB;
        private System.Windows.Forms.Button BrowseBtn;
    }
}

